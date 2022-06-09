import type React from "react";

import TextInput from "../common/TextInput";

import css from "./Interval.module.css";

const Interval: React.FunctionComponent<{
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  intervalMinutes: number;
  disabled: boolean;
}> = ({ onIntervalChange, intervalMinutes, disabled }) => {
  return (
    <div className={css["interval"]}>
      <div className={css["interval--text"]}>
        Interval (minutes)&nbsp;:&nbsp;
      </div>
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
