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

// Move an item to new position that already have another item.
// Former item will move to reasonable position, so kept the length of list.
// Items should be unique.
// Implemented for "drag-and-drop" use-case.
export const movePosition = <T>(
  items: readonly T[],
  mover: T,
  moveTo: T,
): T[] => {
  const from = items.findIndex(
    (element) => element === mover,
  );
  const to = items.findIndex(
    (element) => element === moveTo,
  );

  if ((from < 0) || (to < 0)) {
    throw new Error("given list does not contain given mover/moveTo");
  }

  const newIndex = (index: number): number => {
    if (index > to && index <= from) {
      return index - 1;
    } else if (index === to) {
      return from;
    } else if (index < to && index >= from) {
      return index + 1;
    }

    return index;
  };

  const newItems = [...items];
  items.forEach((item, index) => {
    newItems[newIndex(index)] = item;
  });

  return newItems;
};
