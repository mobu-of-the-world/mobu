import React from "react";

import AppComponent from "./AppComponent";

const AppContainer: React.FunctionComponent = () => {
  const count = React.useRef(0);
  const [tickCount, setTickCount] = React.useState(0);
  const [tickFunc, setTickFunc] = React.useState();

  const onStart = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setTickFunc(
        setInterval(() => {
          count.current += 1;
          setTickCount(count.current);
        }, 1000)
      );
    },
    [count]
  );

  const onPause = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      clearInterval(tickFunc);
    },
    [tickFunc]
  );

  const onReset = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      count.current = 0;
      setTickCount(count.current);
    },
    [count]
  );

  return (
    <AppComponent
      count={tickCount}
      onStart={onStart}
      onPause={onPause}
      onReset={onReset}
    ></AppComponent>
  );
};

export default AppContainer;
