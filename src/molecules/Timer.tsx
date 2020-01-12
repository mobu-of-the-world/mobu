import React from "react";

import Text from "../atoms/Text";
import Button from "../atoms/Button";

import "./Timer.css";
import "../atoms/Button.css";

const Timer: React.FunctionComponent<{
  elapsedTime: string;
  onStartOrPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ elapsedTime, onStartOrPause, onReset }) => {
  return (
    <>
      <Text>Elapsed time: {elapsedTime}</Text>
      <div className="timer--divider" />
      <Button className="button--width-max" onClick={onStartOrPause}>
        Start/Pause
      </Button>
      <div className="timer--divider" />
      <Button className="button--width-max" onClick={onReset}>
        Reset
      </Button>
    </>
  );
};

export default Timer;
