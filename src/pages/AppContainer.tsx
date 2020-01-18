import React from "react";
import Cookies from "js-cookie";

import AppComponent from "../templates/AppComponent";

const emptyUsername = "";
const blankStringsPattern = new RegExp(/^\s*$/);
const initialIntervalSec = 60 * 30;
const COOKIE_KEY_USERS = "users";

const AppContainer: React.FunctionComponent = () => {
  const count = React.useRef(0);
  const timerID = React.useRef<NodeJS.Timeout>();
  const intervalSecRef = React.useRef(initialIntervalSec);
  const [users, setUsers] = React.useState<string[]>(
    JSON.parse(Cookies.get(COOKIE_KEY_USERS) || "[]")
  );
  const [username, setUsername] = React.useState("");
  const [intervalSec, setIntervalSec] = React.useState(initialIntervalSec);

  const [tickCount, setTickCount] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(false);

  const registerDisabled = () =>
    username === emptyUsername ||
    blankStringsPattern.test(username) ||
    users.includes(username);

  const onStartOrPause = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (timerID.current) {
        clearInterval(timerID.current);
        timerID.current = undefined;
        return;
      }

      if (window.Notification && Notification.permission !== "granted") {
        Notification.requestPermission(function(result) {
          switch (result) {
            case "granted":
              alert("Thanks to accept the notification :)");
              break;
            case "denied":
              alert("You rejected the notification :(　Please accept it.");
              break;
            default:
              alert("Can not judge to use notification :(　Please accept it.");
              break;
          }
        });
      }

      timerID.current = setInterval(() => {
        count.current += 1;
        setTickCount(count.current);
        if (count.current % intervalSecRef.current === 0) {
          if (timerID.current) {
            clearInterval(timerID.current);
            timerID.current = undefined;
          }
          setUsers(prev => {
            const newUsers =
              prev.length >= 2
                ? [...prev.slice(1, prev.length), prev[0]]
                : prev;
            Cookies.set(COOKIE_KEY_USERS, JSON.stringify(newUsers));
            return newUsers;
          });
          if (window.Notification) {
            new Notification("Change the driver!");
          }
        }
      }, 1000);
    },
    [count, timerID]
  );

  const onReset = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      count.current = 0;
      setTickCount(count.current);
    },
    [count]
  );

  const onShuffle = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setUsers(prev => {
        const newUsers = shuffleArray<string>([...prev]);
        Cookies.set(COOKIE_KEY_USERS, JSON.stringify(newUsers));
        return newUsers;
      });
    },
    []
  );

  const onUsernameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.currentTarget.value);
    },
    []
  );

  const onIntervalChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newInterval = parseInt(event.currentTarget.value);
      setIntervalSec(newInterval);
      intervalSecRef.current = newInterval;
    },
    []
  );

  const onUserRegister = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setUsers(prev => {
        const newUsers = [...prev, username];
        Cookies.set(COOKIE_KEY_USERS, JSON.stringify(newUsers));
        return newUsers;
      });
      setUsername(emptyUsername);
    },
    [username]
  );

  const onUserRemove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const removeItem = event.currentTarget.getAttribute("value");
      setUsers(prev => {
        const newUsers = prev.filter(item => item !== removeItem);
        Cookies.set(COOKIE_KEY_USERS, JSON.stringify(newUsers));
        return newUsers;
      });
    },
    []
  );

  const onHamburgerMenuClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setShowMenu(true);
    },
    []
  );

  const onHamburgerMenuCloseClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setShowMenu(false);
    },
    []
  );

  return (
    <AppComponent
      elapsedTime={numberToTimeString(tickCount)}
      onStartOrPause={onStartOrPause}
      onReset={onReset}
      onShuffle={onShuffle}
      onUsernameChange={onUsernameChange}
      onIntervalChange={onIntervalChange}
      onUserRegister={onUserRegister}
      onUserRemove={onUserRemove}
      onHamburgerMenuClick={onHamburgerMenuClick}
      onHamburgerMenuCloseClick={onHamburgerMenuCloseClick}
      username={username}
      users={users}
      interval={intervalSec}
      registerDisabled={registerDisabled()}
      showMenu={showMenu}
    ></AppComponent>
  );
};

function numberToTimeString(count: number): string {
  const elapsedTime = new Date(count);
  elapsedTime.setSeconds(count);
  return elapsedTime.toISOString().substr(11, 8);
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }

  return array;
}

export default AppContainer;
