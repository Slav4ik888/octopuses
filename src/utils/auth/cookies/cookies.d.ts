export interface Options {
  path?: string;
  expires?: string;
  'max-age'?: string;
}

export function getCookie(name: string): any;
export function setCookie(name: string, value: string, options: Options): void;
export function deleteCookie(name: string): void;

