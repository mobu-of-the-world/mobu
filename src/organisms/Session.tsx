import React from "react";

import Timer from "../molecules/Timer";
import Interval from "../molecules/Interval";
import SoundConfig, { SoundConfigProps } from "../molecules/SoundConfig";

import "./Session.css";

const Session: React.FunctionComponent<{
  iterationCount: number;
  elapsedTime: string;
  onStartOrPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  intervalMinutes: number;
  disableStartOrPause: boolean;
  soundConfigProps: SoundConfigProps;
}> = ({
  iterationCount,
  elapsedTime,
  onStartOrPause,
  onReset,
  onIntervalChange,
  intervalMinutes,
  disableStartOrPause,
  soundConfigProps,
}) => {
  return (
    <div className="session">
      <Timer
        iterationCount={iterationCount}
        elapsedTime={elapsedTime}
        onStartOrPause={onStartOrPause}
        onReset={onReset}
        disableStartOrPause={disableStartOrPause}
      />
      <div className="session--divider" />
      <Interval
        onIntervalChange={onIntervalChange}
        intervalMinutes={intervalMinutes}
      />
      <SoundConfig {...soundConfigProps} />
    </div>
  );
};

export default Session;
