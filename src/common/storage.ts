const KEY_PREFIX = "mobu-v1-" as const;
const KEY_USERS = `${KEY_PREFIX}users` as const;
const KEY_SOUND_ENABLED = `${KEY_PREFIX}sound_enabled` as const;

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
