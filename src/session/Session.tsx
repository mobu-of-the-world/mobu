import { useState } from "react";

import Timer from "./Timer";
import Interval from "./Interval";
import SoundConfig from "./SoundConfig";
import { getStorageSoundEnabled, setStorageSoundEnabled } from "../common/storage";

import css from "./Session.module.css";

const initialIntervalSeconds = 60 * 30;

const Session = () => {
  const [iterationCount, setIterationCount] = useState(0);
  const [intervalSeconds, setIntervalSeconds] = useState(
    initialIntervalSeconds,
  );
  const [isSoundEnabled, setIsSoundEnabled] = useState(
    getStorageSoundEnabled(),
  );

  return (
    <div className={css.session}>
      <Timer
        intervalSeconds={intervalSeconds}
        isSoundEnabled={isSoundEnabled}
        iterationCount={iterationCount}
        setIterationCount={setIterationCount}
      />
      <div className={css["session--divider"]} />
      <Interval
        setIntervalSeconds={setIntervalSeconds}
        intervalSeconds={intervalSeconds}
        disabled={iterationCount > 0}
      />
      <SoundConfig
        onChangeSoundConfig={(_event: React.ChangeEvent<HTMLInputElement>) => {
          setStorageSoundEnabled(!isSoundEnabled);
          setIsSoundEnabled(!isSoundEnabled);
        }}
        isSoundEnabled={isSoundEnabled}
      />
    </div>
  );
};

export default Session;
