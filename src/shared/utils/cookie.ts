import Cookies, { CookieAttributes } from 'js-cookie';

export const getFromCookie = (cookieName: string): string | undefined => {
  return Cookies.get(cookieName);
};

export const setToCookie = (
  cookieName: string,
  value: string,
  options?: CookieAttributes | undefined
): void => {
  Cookies.set(cookieName, value, options);
};

export const deleteFromCookie = (cookieName: string): void => {
  Cookies.remove(cookieName);
};
