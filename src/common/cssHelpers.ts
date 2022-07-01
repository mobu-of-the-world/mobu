export const buildClassNames = (classNames: (string | undefined)[]): string => classNames.filter(Boolean).join(" ");
