import { FC } from "react";

import Text from "../atoms/Text";
import Button from "../atoms/Button";

import "./Timer.css";
import "../atoms/Button.css";

export type TimerProps = {
  elapsedTime: string;
  iterationCount: number;
  onStartOrPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
  disableStartOrPause: boolean;
};

const Timer: FC<TimerProps> = (props) => {
  return (
    <>
      <Text>elapsed time: {props.elapsedTime}</Text>
      <Text>(iteration: {props.iterationCount})</Text>
      <div className="timer--divider" />
      <Button
        className="button--width-max"
        onClick={props.onStartOrPause}
        disabled={props.disableStartOrPause}
      >
        Start/Pause
      </Button>
      <div className="timer--divider" />
      <Button className="button--width-max" onClick={props.onReset}>
        Reset
      </Button>
    </>
  );
};

export default Timer;
