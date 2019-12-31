import React from "react";

const Timer: React.FunctionComponent<{ elapsedTime: string }> = ({
  elapsedTime
}) => {
  return <div>Elapsed time: {elapsedTime}</div>;
};

export default Timer;
