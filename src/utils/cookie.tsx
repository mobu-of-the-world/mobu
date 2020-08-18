import Cookies from "js-cookie";

const EXPIRE_DAYS = 365;
const COOKIE_KEY_USERS = "users";

export function getCookieUsers(): string {
  return Cookies.get(COOKIE_KEY_USERS) || "[]";
}

export function setCookieUsers(newUsers: string[]): void {
  Cookies.set(COOKIE_KEY_USERS, JSON.stringify(newUsers), {
    expires: EXPIRE_DAYS
  });
}
