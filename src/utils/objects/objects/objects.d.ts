export function extend<A, B>(a: A, b: B): {};

export function arrFromObj<T>(obj: T): Array<T>;

export function arrFromObjByObj<T>(obj: T, field: string): Array<{ [field: string]: T }>;

