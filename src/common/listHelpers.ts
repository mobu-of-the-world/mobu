import { assertIsDefined } from "./typeguard";

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    const newItem = array[rand];
    const oldItem = array[i];
    assertIsDefined<T | undefined>(newItem);
    assertIsDefined<T | undefined>(oldItem);
    [array[i], array[rand]] = [newItem, oldItem];
  }

  return array;
};
