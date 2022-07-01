import { useCallback, useState } from "react";

import Text from "../common/Text";
import Button from "../common/Button";

import { useSetPersistedUsers, useUsers } from "../common/usersContexts";

import timerCss from "./Timer.module.css";
import buttonCss from "../common/Button.module.css";
import audiofile from "./assets/bell.mp3";
import { readableElapsedTime } from "./timeHelpers";
import { useInterval } from "../common/timerHooks";

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
  const [countTotal, setCountTotal] = useState(0);
  const [countInIteration, setCountInIteration] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useInterval(
    () => {
      if (countInIteration > 0 && countInIteration % intervalSeconds === 0) {
        setIterationCount((countTotal / intervalSeconds) + 1);
        setCountInIteration(0);
        setIsCounting(false);
        setPersistedUsers(
          users.length >= 2 ?
            [...users.slice(1, users.length), users[0]].flatMap((user) => user ? [user] : []) :
            users,
        );
        if (isSoundEnabled) {
          const bell = new Audio(audiofile);
          bell.play();
        }
        if (window.Notification) {
          new Notification("Change the driver!");
        }
      } else {
        setCountInIteration(countInIteration + 1);
        setCountTotal(countTotal + 1);
      }
    },
    isCounting ? 1000 : null,
  );

  const onStartOrPause = useCallback(() => {
    if (isCounting) {
      setIsCounting(false);
      return;
    }

    if (iterationCount === 0) {
      setIterationCount(1);

      if (window.Notification && Notification.permission !== "granted") {
        const alertMessageByNotificationPermission: Readonly<
          {
            [key in NotificationPermission]: string;
          }
        > = {
          granted: "Thanks to accept the notification :)",
          denied: "You rejected the notification :(Please accept it.",
          default: "Can not judge to use notification :(Please accept it.",
        };

        Notification.requestPermission((result) => {
          alert(alertMessageByNotificationPermission[result]);
        });
      }
    }

    setIsCounting(true);
  }, [isCounting, iterationCount, setIterationCount]);

  const onReset = useCallback(() => {
    setIsCounting(false);
    setCountTotal(0);
    setCountInIteration(0);
    setIterationCount(0);
  }, [setIsCounting, setCountTotal, setIterationCount]);

  return (
    <>
      <Text>elapsed time: {readableElapsedTime(countTotal)}</Text>
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
