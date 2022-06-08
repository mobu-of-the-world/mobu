export const readableElapsedTime = (seconds: number): string => {
  const elapsedTime = new Date(seconds);
  elapsedTime.setSeconds(seconds);
  // eslint-disable-next-line deprecation/deprecation
  return elapsedTime.toISOString().substr(11, 8);
};
