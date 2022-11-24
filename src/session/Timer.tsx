import { useCallback, useState } from "react";

import Text from "../common/Text";
import Button from "../common/Button";

import { useSetPersistedUsers, useUsers } from "../common/usersContexts";

import timerCss from "./Timer.module.css";
import buttonCss from "../common/Button.module.css";
import audiofile from "./assets/bell.mp3";
import { readableElapsedTime } from "./timeHelpers";
import { useInterval } from "../common/timerHooks";

const secondsFromMilliseconds = (milliseconds: number): number => {
  return Math.round(milliseconds / 1000);
};

const Timer = ({
  intervalSeconds,
  isSoundEnabled,
  iterationCount,
  setIterationCount,
}: {
  intervalSeconds: number;
  isSoundEnabled: boolean;
  iterationCount: number;
  setIterationCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const users = useUsers();
  const setPersistedUsers = useSetPersistedUsers();
  const [isCounting, setIsCounting] = useState(false);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [lastPausedAt, setLastPausedAt] = useState<number | null>(null);
  const [pausedSeconds, setPausedSeconds] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useInterval(
    () => {
      const now = Date.now();

      if (startedAt === null) {
        return;
      }

      const actualElapsedSeconds = ((now - startedAt) / 1000) - pausedSeconds;
      if (elapsedSeconds !== actualElapsedSeconds) {
        setElapsedSeconds(actualElapsedSeconds);
      }
      if (actualElapsedSeconds >= intervalSeconds * iterationCount) {
        setIterationCount(iterationCount + 1);
        setIsCounting(false);
        setLastPausedAt(now);
        setPersistedUsers(
          users.length >= 2 ?
            [...users.slice(1, users.length), users[0]].flatMap((user) => user ? [user] : []) :
            users,
        );
        if (isSoundEnabled) {
          if (typeof audiofile === "string") {
            const bell = new Audio(audiofile);
            void bell.play();
          }
        }
        new Notification("Change the driver!");
      }
    },
    isCounting ? 500 : null,
  );

  const onStartOrPause = useCallback(() => {
    const now = Date.now();
    if (isCounting) {
      setIsCounting(false);
      setLastPausedAt(now);
      return;
    }

    if (startedAt === null) {
      setStartedAt(now);
      setIsCounting(true);
    } else {
      setPausedSeconds(
        pausedSeconds +
          secondsFromMilliseconds(now - (lastPausedAt ?? startedAt)),
      );
    }

    if (iterationCount === 0) {
      setIterationCount(1);

      if (Notification.permission !== "granted") {
        const alertMessageByNotificationPermission = {
          granted: "Thanks to accept the notification :)",
          denied: "You rejected the notification :(Please accept it.",
          default: "Can not judge to use notification :(Please accept it.",
        } as const satisfies {
          [key in NotificationPermission]: string;
        };

        void Notification.requestPermission((result) => {
          alert(alertMessageByNotificationPermission[result]);
        });
      }
    }

    setIsCounting(true);
  }, [
    isCounting,
    iterationCount,
    pausedSeconds,
    setIterationCount,
    startedAt,
    lastPausedAt,
    setLastPausedAt,
  ]);

  const onReset = useCallback(() => {
    setIsCounting(false);
    setStartedAt(null);
    setLastPausedAt(null);
    setIterationCount(0);
    setPausedSeconds(0);
    setElapsedSeconds(0);
  }, [
    setIsCounting,
    setStartedAt,
    setIterationCount,
    setPausedSeconds,
    setLastPausedAt,
    setElapsedSeconds,
  ]);

  return (
    <>
      <Text>elapsed time: {readableElapsedTime(elapsedSeconds)}</Text>
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
