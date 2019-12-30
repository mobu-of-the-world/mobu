import React from "react";

const Timer: React.FunctionComponent<{ count: number }> = ({ count }) => {
  return <div>Timer: {count}</div>;
};

export default Timer;
