export function extend<A, B>(a: A, b: B): {};

export function arrFromObj<T>(obj: T): Array<keyof T>;

export function arrFromObjByObj<T>(obj: T, field: string): Array<{ [field: string]: T }>;

