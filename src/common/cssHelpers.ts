export const buildClassNames = (classNames: readonly (string | undefined)[]): string =>
  classNames.filter(Boolean).join(" ");
