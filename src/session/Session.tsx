import { FunctionComponent, useCallback, useRef, useState } from "react";

import Timer from "./Timer";
import Interval from "./Interval";
import SoundConfig from "./SoundConfig";
import {
  getStorageSoundEnabled,
  setStorageSoundEnabled,
} from "../common/storage";

import css from "./Session.module.css";

const initialIntervalSeconds = 60 * 30;

const Session: FunctionComponent = () => {
  const [iterationCount, setIterationCount] = useState(0);
  const intervalSecondsRef = useRef(initialIntervalSeconds);
  const [intervalSeconds, setIntervalSeconds] = useState(
    initialIntervalSeconds
  );
  const [soundEnabled, setSoundEnabled] = useState(getStorageSoundEnabled());
  const onIntervalChange = useCallback(
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

  return (
    <div className={css["session"]}>
      <Timer
        intervalSecondsRef={intervalSecondsRef}
        soundEnabled={soundEnabled}
        iterationCount={iterationCount}
        setIterationCount={setIterationCount}
      />
      <div className={css["session--divider"]} />
      <Interval
        onIntervalChange={onIntervalChange}
        intervalMinutes={Math.ceil(intervalSeconds / 60)}
        disabled={iterationCount > 0}
      />
      <SoundConfig
        onChangeSoundConfig={(_event: React.ChangeEvent<HTMLInputElement>) => {
          setStorageSoundEnabled(!soundEnabled);
          setSoundEnabled(!soundEnabled);
        }}
        soundEnabled={soundEnabled}
      />
    </div>
  );
};

export default Session;
