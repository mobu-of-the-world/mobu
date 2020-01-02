import React from "react";

import AppComponent from "./AppComponent";

const emptyUsername = "";
const blankStringsPattern = new RegExp(/^\s*$/);
const interval = 60 * 30; // second

const AppContainer: React.FunctionComponent = () => {
  const count = React.useRef(0);
  const timerID = React.useRef<NodeJS.Timeout>();
  const [users, setUsers] = React.useState<string[]>([]);
  const [username, setUsername] = React.useState("");

  const [tickCount, setTickCount] = React.useState(0);

  const registerDisabled = () =>
    username === emptyUsername ||
    blankStringsPattern.test(username) ||
    users.includes(username);

  const onStart = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (timerID.current) {
        return;
      }
      timerID.current = setInterval(() => {
        count.current += 1;
        setTickCount(count.current);
        if (count.current % interval === 0) {
          setUsers(prev =>
            prev.length >= 2 ? [...prev.slice(1, prev.length), prev[0]] : prev
          );
        }
      }, 1000);
    },
    [count]
  );

  const onPause = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (timerID.current) {
        clearInterval(timerID.current);
        timerID.current = undefined;
      }
    },
    [timerID]
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
      setUsers(prev => shuffleArray([...prev]));
    },
    []
  );

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.currentTarget.value);
    },
    []
  );

  const onUserRegister = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setUsers(prev => [...prev, username]);
      setUsername(emptyUsername);
    },
    [username]
  );

  const onUserRemove = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const removeItem = event.currentTarget.value;
      setUsers(prev => prev.filter(item => item !== removeItem));
    },
    []
  );

  return (
    <AppComponent
      elapsedTime={numberToTimeString(tickCount)}
      onStart={onStart}
      onPause={onPause}
      onReset={onReset}
      onShuffle={onShuffle}
      onChange={onChange}
      onUserRegister={onUserRegister}
      onUserRemove={onUserRemove}
      username={username}
      users={users}
      registerDisabled={registerDisabled()}
    ></AppComponent>
  );
};

function numberToTimeString(count: number): string {
  const elapsedTime = new Date(count);
  elapsedTime.setSeconds(count);
  return elapsedTime.toISOString().substr(11, 8);
}

function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }

  return array;
}

export default AppContainer;
