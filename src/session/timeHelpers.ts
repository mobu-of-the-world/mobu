export const readableElapsedTime = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  return date.toISOString().substring(11, 19);
};
