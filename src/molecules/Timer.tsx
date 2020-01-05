import React from "react";

import Text from "../atoms/Text";
import Button from "../atoms/Button";

const Timer: React.FunctionComponent<{
  elapsedTime: string;
  onStartOrPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ elapsedTime, onStartOrPause, onReset }) => {
  return (
    <>
      <Text>Elapsed time: {elapsedTime}</Text>
      <Button onClick={onStartOrPause}>Start/Pause</Button>
      <Button onClick={onReset}>Reset</Button>
    </>
  );
};

export default Timer;
