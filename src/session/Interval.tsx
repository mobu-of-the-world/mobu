import { ChangeEvent, useCallback } from "react";

import TextInput from "../common/TextInput";

import css from "./Interval.module.css";

const Interval = ({
  setIntervalSeconds,
  intervalSeconds,
  disabled,
}: {
  setIntervalSeconds: (value: React.SetStateAction<number>) => void;
  intervalSeconds: number;
  disabled: boolean;
}) => {
  const params = new URL(window.location.href).searchParams;
  const unit = params.get("unit") === "seconds" ? "seconds" : "minutes";
  const interval = {
    seconds: intervalSeconds,
    minutes: Math.ceil(intervalSeconds / 60),
  }[unit];
  const onIntervalChange = {
    seconds: useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const newIntervalSeconds = parseInt(event.currentTarget.value);
        if (newIntervalSeconds > 0) {
          setIntervalSeconds(newIntervalSeconds);
        }
      },
      [setIntervalSeconds]
    ),
    minutes: useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const newIntervalMinutes = parseInt(event.currentTarget.value);
        if (newIntervalMinutes > 0) {
          const newIntervalSeconds = newIntervalMinutes * 60;
          setIntervalSeconds(newIntervalSeconds);
        }
      },
      [setIntervalSeconds]
    ),
  }[unit];

  return (
    <div className={css["interval"]}>
      <div className={css["interval--text"]}>
        Interval {`(${unit})`}&nbsp;:&nbsp;
      </div>
      <TextInput
        onChange={onIntervalChange}
        type="number"
        value={interval}
        disabled={disabled}
      />
    </div>
  );
};

export default Interval;
