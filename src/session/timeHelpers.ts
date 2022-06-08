export const readableElapsedTime = (seconds: number): string => {
  const date = new Date(0);
  date.setSeconds(seconds);
  // eslint-disable-next-line deprecation/deprecation
  return date.toISOString().substr(11, 8);
};
