import { isString, isTypedArray } from "./typeguard";

const KEY_PREFIX = "mobu-v1-";
const KEY_USERS = `${KEY_PREFIX}users`;
const KEY_SOUND_ENABLED = `${KEY_PREFIX}sound_enabled`;

export const getStorageSoundEnabled = (): boolean => {
  return localStorage.getItem(KEY_SOUND_ENABLED) === "true";
};

export const setStorageSoundEnabled = (isSoundEnabled: boolean): void => {
  localStorage.setItem(KEY_SOUND_ENABLED, JSON.stringify(isSoundEnabled));
};

export const getStorageUsers = (): string[] => {
  const stored = localStorage.getItem(KEY_USERS);
  if (stored) {
    const parsed: unknown = JSON.parse(stored);
    if (isTypedArray<string>(parsed, isString)) {
      return parsed;
    }
  }

  return [];
};

export const setStorageUsers = (newUsers: readonly string[]): void => {
  localStorage.setItem(KEY_USERS, JSON.stringify(newUsers));
};
