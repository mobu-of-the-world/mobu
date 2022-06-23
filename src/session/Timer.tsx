import { MutableRefObject, useCallback, useRef, useState } from "react";

import Text from "../common/Text";
import Button from "../common/Button";

import { useSetPersistedUsers, useUsers } from "../common/usersContexts";

import timerCss from "./Timer.module.css";
import buttonCss from "../common/Button.module.css";
import audiofile from "./assets/bell.mp3";
import { readableElapsedTime } from "./timeHelpers";

const Timer = ({
  intervalSecondsRef,
  soundEnabled,
  iterationCount,
  setIterationCount,
}: {
  intervalSecondsRef: MutableRefObject<number>;
  soundEnabled: boolean;
  iterationCount: number;
  setIterationCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const users = useUsers();
  const setPersistedUsers = useSetPersistedUsers();
  const count = useRef(0);
  const timerID = useRef<NodeJS.Timeout>();
  const [tickCount, setTickCount] = useState(0);

  const onStartOrPause = useCallback(() => {
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
            return;
          case "denied":
            alert("You rejected the notification :(　Please accept it.");
            return;
          case "default":
            alert("Can not judge to use notification :(　Please accept it.");
            return;
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
            ? [...users.slice(1, users.length), users[0]].flatMap((user) =>
                user ? [user] : []
              )
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
  }, [
    iterationCount,
    setIterationCount,
    intervalSecondsRef,
    setPersistedUsers,
    users,
    soundEnabled,
  ]);

  const onReset = useCallback(() => {
    if (timerID.current) {
      clearInterval(timerID.current);
      timerID.current = undefined;
    }
    count.current = 0;
    setTickCount(count.current);
    setIterationCount(0);
  }, [setIterationCount]);

  return (
    <>
      <Text>elapsed time: {readableElapsedTime(tickCount)}</Text>
      <Text>(iteration: {iterationCount})</Text>
      <div className={timerCss["timer--divider"]} />
      <Button
        className={buttonCss["button--width-max"]}
        onClick={onStartOrPause}
        disabled={users.length < 2}
      >
        Start/Pause
      </Button>
      <div className={timerCss["timer--divider"]} />
      <Button className={buttonCss["button--width-max"]} onClick={onReset}>
        Reset
      </Button>
    </>
  );
};

export default Timer;
