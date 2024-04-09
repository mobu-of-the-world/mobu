// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}

export const isString = (val: unknown): val is string => {
  return typeof val === "string";
};

export const isTypedArray = <T>(val: unknown, isT: (elm: unknown) => elm is T): val is T[] => {
  return Array.isArray(val) && val.every((elm) => isT(elm));
};
