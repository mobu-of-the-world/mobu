const KEY_USERS = "users";
const KEY_SOUND_ENABLED = "sound_enabled";

export const getStorageSoundEnabled = (): boolean => {
  return localStorage.getItem(KEY_SOUND_ENABLED) === "true";
};

export const setStorageSoundEnabled = (soundEnabled: boolean): void => {
  localStorage.setItem(KEY_SOUND_ENABLED, JSON.stringify(soundEnabled));
};

export const getStorageUsers = (): string => {
  return localStorage.getItem(KEY_USERS) || "[]";
};

export const setStorageUsers = (newUsers: string[]): void => {
  localStorage.setItem(KEY_USERS, JSON.stringify(newUsers));
};
