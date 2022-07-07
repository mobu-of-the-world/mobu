import { assertIsDefined } from "./typeguard";

export const shuffleArray = <T>(array: readonly T[]): T[] => {
  const dup = [...array];
  for (let i = dup.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    const newItem = dup[rand];
    const oldItem = dup[i];
    assertIsDefined<T | undefined>(newItem);
    assertIsDefined<T | undefined>(oldItem);
    [dup[i], dup[rand]] = [newItem, oldItem];
  }

  return dup;
};
