import Cookies from "js-cookie";

const EXPIRE_DAYS = 365;
const COOKIE_KEY_USERS = "users";
const COOKIE_KEY_SOUND_ENABLED = "sound_enabled";

export const getCookieUsers = (): string => {
  return Cookies.get(COOKIE_KEY_USERS) || "[]";
};

export const setCookieUsers = (newUsers: string[]): void => {
  Cookies.set(COOKIE_KEY_USERS, JSON.stringify(newUsers), {
    expires: EXPIRE_DAYS,
  });
};

export const getCookieSoundEnabled = (): boolean => {
  return Cookies.get(COOKIE_KEY_SOUND_ENABLED) === "true";
};

export const setCookieSoundEnabled = (soundEnabled: boolean): void => {
  Cookies.set(COOKIE_KEY_SOUND_ENABLED, JSON.stringify(soundEnabled), {
    expires: EXPIRE_DAYS,
  });
};
