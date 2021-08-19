import { CourseFolder } from '../../../../types/user';

// Возвращает новый объект lastItem с обновлёнными полями
export function updateObject<T>(lastObj: T, updateItem: CourseFolder): T;