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
    return [...items];
  }

  const newPosition = (index: number): number => {
    const isStay = from === to;
    const isMover = index === from;
    const isPointOfArrival = index === to;
    const isJumpedOver = (from < index && index < to) || (index < from && to < index);
    const isRequiredToSlide = isPointOfArrival || isJumpedOver;
    const isPointingDown = from < to;

    if (isStay) {
      return index;
    }

    if (isMover) {
      return to;
    }

    if (!isRequiredToSlide) {
      return index;
    }

    if (isPointingDown) {
      // Keep in mind. Returning value is not an "index". Minus value means reversed order in Array.
      return index - 1;
    } else {
      return index + 1;
    }
  };

  const withNewPositions = items.map((item, index) => ({ item, newPosition: newPosition(index) }));
  withNewPositions.sort((a, b) => a.newPosition - b.newPosition);
  return withNewPositions.map((wn) => wn.item);
};
