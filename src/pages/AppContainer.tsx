import React from "react";

import AppComponent from "../templates/AppComponent";
import { setCookieSoundEnabled, getCookieSoundEnabled } from "../utils/cookie";
import audiofile from "../assets/audio/bell.mp3";
import { SoundConfigProps } from "../molecules/SoundConfig";
import { TimerProps } from "../molecules/Timer";
import {
  UsersProvider,
  useSetPersistedUsers,
  useUsers,
} from "../contexts/users-contexts";

const initialIntervalSeconds = 60 * 30;

const AppContainer: React.FunctionComponent = () => {
  const count = React.useRef(0);
  const timerID = React.useRef<NodeJS.Timeout>();
  const intervalSecondsRef = React.useRef(initialIntervalSeconds);
  const users = useUsers();
  const setPersistedUsers = useSetPersistedUsers();
  const [intervalSeconds, setIntervalSeconds] = React.useState(
    initialIntervalSeconds
  );

  const [tickCount, setTickCount] = React.useState(0);
  const [iterationCount, setIterationCount] = React.useState(0);

  const [soundEnabled, setSoundEnabled] = React.useState(
    getCookieSoundEnabled()
  );

  const onStartOrPause = React.useCallback(() => {
    if (iterationCount === 0) {
      setIterationCount(1);
    }
    if (timerID.current) {
      clearInterval(timerID.current);
      timerID.current = undefined;
      return;
    }

    if (window.Notification && Notification.permission !== "granted") {
      Notification.requestPermission((result) => {
        switch (result) {
          case "granted":
            alert("Thanks to accept the notification :)");
            break;
          case "denied":
            alert("You rejected the notification :(　Please accept it.");
            break;
          case "default":
            alert("Can not judge to use notification :(　Please accept it.");
            break;
          default:
            const _: never = result;
            return _;
        }
      });
    }

    timerID.current = setInterval(() => {
      count.current += 1;
      setTickCount(count.current);
      if (count.current % intervalSecondsRef.current === 0) {
        setIterationCount(count.current / intervalSecondsRef.current + 1);
        if (timerID.current) {
          clearInterval(timerID.current);
          timerID.current = undefined;
        }
        setPersistedUsers(
          users.length >= 2
            ? [...users.slice(1, users.length), users[0]]
            : users
        );
        if (soundEnabled) {
          const bell = new Audio(audiofile);
          bell.play();
        }
        if (window.Notification) {
          new Notification("Change the driver!");
        }
      }
    }, 1000);
  }, [setPersistedUsers, users, count, timerID, soundEnabled, iterationCount]);

  const onReset = React.useCallback(() => {
    if (timerID.current) {
      clearInterval(timerID.current);
      timerID.current = undefined;
    }
    count.current = 0;
    setTickCount(count.current);
    setIterationCount(0);
  }, [count]);

  const onIntervalChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newIntervalMinutes = parseInt(event.currentTarget.value);
      if (newIntervalMinutes > 0) {
        const newIntervalSeconds = newIntervalMinutes * 60;
        setIntervalSeconds(newIntervalSeconds);
        intervalSecondsRef.current = newIntervalSeconds;
      }
    },
    []
  );

  const soundConfigProps: SoundConfigProps = {
    onChangeSoundConfig: (_event: React.ChangeEvent<HTMLInputElement>) => {
      setCookieSoundEnabled(!soundEnabled);
      setSoundEnabled(!soundEnabled);
    },
    soundEnabled: soundEnabled,
  };

  const timerProps: TimerProps = {
    elapsedTime: numberToTimeString(tickCount),
    iterationCount: iterationCount,
    onReset: onReset,
    onStartOrPause: onStartOrPause,
    disableStartOrPause: users.length < 2,
  };

  return (
    <UsersProvider>
      <AppComponent
        timerProps={timerProps}
        onIntervalChange={onIntervalChange}
        intervalMinutes={Math.ceil(intervalSeconds / 60)}
        soundConfigProps={soundConfigProps}
      ></AppComponent>
    </UsersProvider>
  );
};

const numberToTimeString = (count: number): string => {
  const elapsedTime = new Date(count);
  elapsedTime.setSeconds(count);
  return elapsedTime.toISOString().substr(11, 8);
};

export default AppContainer;
