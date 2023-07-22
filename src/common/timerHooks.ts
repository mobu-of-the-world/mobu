import { useEffect, useRef } from "react";

// refs:
//   * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//   * https://usehooks-ts.com/react-hook/use-interval
export const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
};
