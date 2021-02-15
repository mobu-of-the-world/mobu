import React from "react";

import AppComponent from "../templates/AppComponent";
import { setCookieUsers, getCookieUsers } from "../utils/cookie";

const emptyUsername = "";
const blankStringsPattern = new RegExp(/^\s*$/);
const initialIntervalSeconds = 60 * 30;

const AppContainer: React.FunctionComponent = () => {
  const count = React.useRef(0);
  const timerID = React.useRef<NodeJS.Timeout>();
  const intervalSecondsRef = React.useRef(initialIntervalSeconds);
  const [users, setUsers] = React.useState<string[]>(
    JSON.parse(getCookieUsers())
  );
  const [username, setUsername] = React.useState("");
  const [intervalSeconds, setIntervalSeconds] = React.useState(
    initialIntervalSeconds
  );

  const [tickCount, setTickCount] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(false);

  const registerDisabled = () =>
    username === emptyUsername ||
    blankStringsPattern.test(username) ||
    users.includes(username);

  const onStartOrPause = React.useCallback(() => {
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
      if (count.current % intervalSecondsRef.current === 0) {
        if (timerID.current) {
          clearInterval(timerID.current);
          timerID.current = undefined;
        }
        setUsers(prev => {
          const newUsers =
            prev.length >= 2 ? [...prev.slice(1, prev.length), prev[0]] : prev;
          setCookieUsers(newUsers);
          return newUsers;
        });
        if (window.Notification) {
          new Notification("Change the driver!");
        }
      }
    }, 1000);
  }, [count, timerID]);

  const onReset = React.useCallback(() => {
    count.current = 0;
    setTickCount(count.current);
  }, [count]);

  const onShuffle = React.useCallback(() => {
    setUsers(prev => {
      const newUsers = shuffleArray<string>([...prev]);
      setCookieUsers(newUsers);
      return newUsers;
    });
  }, []);

  const onUsernameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.currentTarget.value);
    },
    []
  );

  const onIntervalChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newIntervalMinutes = parseInt(event.currentTarget.value);
      const newIntervalSeconds = newIntervalMinutes * 60;
      setIntervalSeconds(newIntervalSeconds);
      intervalSecondsRef.current = newIntervalSeconds;
    },
    []
  );

  const onUserRegister = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setUsers(prev => {
        const newUsers = [...prev, username];
        setCookieUsers(newUsers);
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
        setCookieUsers(newUsers);
        return newUsers;
      });
    },
    []
  );

  const onHamburgerMenuClick = React.useCallback(() => {
    setShowMenu(true);
  }, []);

  const onHamburgerMenuCloseClick = React.useCallback(() => {
    setShowMenu(false);
  }, []);

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
      intervalMinutes={Math.ceil(intervalSeconds / 60)}
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
