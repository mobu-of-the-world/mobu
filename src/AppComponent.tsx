import React from "react";
import Button from "./atoms/Button";
import Timer from "./atoms/Timer";

const AppComponent: React.FunctionComponent<{
  elapsedTime: string;
  onStart: (event: React.MouseEvent<HTMLElement>) => void;
  onPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ elapsedTime, onStart, onPause, onReset }) => {
  return (
    <div>
      <Timer elapsedTime={elapsedTime} />
      <Button onClick={onStart}>Start</Button>
      <Button onClick={onPause}>Pause</Button>
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
};

export default AppComponent;
