import { Role } from '../../../types/types-require.js';

// Является ли роль пользователя Role.USER
export const isRoleUser = user => user.role === Role.USER;
// Является ли роль пользователя Role.ADMIN
export const isRoleAdmin = user => user.role === Role.ADMIN;
// Является ли роль пользователя Role.SUPER
export const isRoleSuper = user => user.role === Role.SUPER;
// НЕ является ли роль пользователя Role.USER
export const isNoRoleUser = user => !isRoleUser(user);
// НЕ является ли роль пользователя Role.ADMIN
export const isNoRoleAdmin = user => !isRoleAdmin(user);
// НЕ является ли роль пользователя Role.SUPER
export const isNoRoleSuper = user => !isRoleSuper(user);

// // Является ли запроситель Владельцем по uid,
// export const isUser = (reqUser, ownerId) => reqUser.userId === ownerId;
// // Является ли пользователь тем о ком запрашиваются данные
// export const isThisUser = (reqUser, userId) => reqUser.userId === userId;
// // Запрашиваемая компания является компанией пользователя
// export const isThisCompanyId = (reqUser, companyId) => reqUser.companyId === companyId;
// // НЕ является ли запроситель Владельцем по uid,
// export const isNoOwner = (reqUser, ownerId) => !isOwner(reqUser, ownerId);
// // Возвращает НЕ является ли пользователь тем о ком запрашиваются данные
// export const isNoThisUser = (reqUser, userId) => !isThisUser(reqUser, userId);
// // Запрашиваемая компания НЕ является компанией пользователя
// export const isNoThisCompanyId = (reqUser, companyId) => !isThisCompanyId(reqUser, companyId);
