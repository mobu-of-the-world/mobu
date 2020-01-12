import React from "react";

import TextInput from "../atoms/TextInput";
import Text from "../atoms/Text";

import "./Interval.css";

const Interval: React.FunctionComponent<{
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  interval: number;
}> = ({ onIntervalChange, interval }) => {
  return (
    <div className="interval">
      <div className="interval--text">Interval (sec)&nbsp;:&nbsp;</div>
      <TextInput onChange={onIntervalChange} type="number" value={interval} />
    </div>
  );
};

export default Interval;
