import React from "react";

import Timer from "./Timer";
import Interval from "./Interval";
import SoundConfig from "./SoundConfig";
import { getCookieSoundEnabled, setCookieSoundEnabled } from "../common/cookie";

import "./Session.css";

const initialIntervalSeconds = 60 * 30;

const Session: React.FunctionComponent = () => {
  const [iterationCount, setIterationCount] = React.useState(0);
  const intervalSecondsRef = React.useRef(initialIntervalSeconds);
  const [intervalSeconds, setIntervalSeconds] = React.useState(
    initialIntervalSeconds
  );
  const [soundEnabled, setSoundEnabled] = React.useState(
    getCookieSoundEnabled()
  );
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

  return (
    <div className="session">
      <Timer
        intervalSecondsRef={intervalSecondsRef}
        soundEnabled={soundEnabled}
        iterationCount={iterationCount}
        setIterationCount={setIterationCount}
      />
      <div className="session--divider" />
      <Interval
        onIntervalChange={onIntervalChange}
        intervalMinutes={Math.ceil(intervalSeconds / 60)}
        disabled={iterationCount > 0}
      />
      <SoundConfig
        onChangeSoundConfig={(_event: React.ChangeEvent<HTMLInputElement>) => {
          setCookieSoundEnabled(!soundEnabled);
          setSoundEnabled(!soundEnabled);
        }}
        soundEnabled={soundEnabled}
      />
    </div>
  );
};

export default Session;
