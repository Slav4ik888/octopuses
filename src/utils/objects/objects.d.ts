import { TaskStatusConst } from '../../../types/types-require.js';


export function getTaskStatusByField(value: TaskStatusConst, fieldFrom: string, fieldTo: string): TaskStatusConst | boolean;

export function arrFromObj<T>(obj: T): Array<T>;

export function arrFromObjByObj<T>(obj: T, field: string): Array<{ [field: string]: T }>;

