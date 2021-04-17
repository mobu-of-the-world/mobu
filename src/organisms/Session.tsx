import React from "react";

import Timer, { TimerProps } from "../molecules/Timer";
import Interval from "../molecules/Interval";
import SoundConfig, { SoundConfigProps } from "../molecules/SoundConfig";

import "./Session.css";

const Session: React.FunctionComponent<{
  timerProps: TimerProps;
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  intervalMinutes: number;
  soundConfigProps: SoundConfigProps;
}> = ({ timerProps, onIntervalChange, intervalMinutes, soundConfigProps }) => {
  return (
    <div className="session">
      <Timer {...timerProps} />
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
