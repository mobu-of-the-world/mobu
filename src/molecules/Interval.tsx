import React from "react";

import TextInput from "../atoms/TextInput";

import "./Interval.css";

const Interval: React.FunctionComponent<{
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  interval: number;
}> = ({ onIntervalChange, interval }) => {
  return (
    <div className="interval">
      <div className="interval--text">Interval (sec)&nbsp;:&nbsp;</div>
      <TextInput
        onChange={onIntervalChange}
        type="number"
        value={interval}
        min={1}
      />
    </div>
  );
};

export default Interval;
