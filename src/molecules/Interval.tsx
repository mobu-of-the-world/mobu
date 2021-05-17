import React from "react";

import TextInput from "../atoms/TextInput";

import "./Interval.css";

const Interval: React.FunctionComponent<{
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  intervalMinutes: number;
  disabled: boolean;
}> = ({ onIntervalChange, intervalMinutes, disabled }) => {
  return (
    <div className="interval">
      <div className="interval--text">Interval (minutes)&nbsp;:&nbsp;</div>
      <TextInput
        onChange={onIntervalChange}
        type="number"
        value={intervalMinutes}
        min={1}
        disabled={disabled}
      />
    </div>
  );
};

export default Interval;
