import { Role, RoleRequester } from '../../../types/types-require.js';

// Является ли роль пользователя Role.OWNER
export const isRoleOwner   = user => user.role === Role.OWNER;
// Является ли роль пользователя Role.ADMIN
export const isRoleAdmin   = user => user.role === Role.ADMIN;
// Является ли роль пользователя Role.SUPER
export const isRoleSuper   = user => user.role === Role.SUPER;
// НЕ является ли роль пользователя Role.OWNER
export const isNoRoleOwner = user => !isRoleOwner(user);
// НЕ является ли роль пользователя Role.ADMIN
export const isNoRoleAdmin = user => !isRoleAdmin(user);
// НЕ является ли роль пользователя Role.SUPER
export const isNoRoleSuper = user => !isRoleSuper(user);

// Является ли запроситель Владельцем по uid;
export const isOwner           = (reqUser, ownerId)   => reqUser.userId === ownerId;
// Является ли пользователь тем о ком запрашиваются данные
export const isThisUser        = (reqUser, userId)    => reqUser.userId === userId;
// Запрашиваемая компания является компанией пользователя
export const isThisCompanyId   = (reqUser, companyId) => reqUser.companyId === companyId;
// НЕ является ли запроситель Владельцем по uid;
export const isNoOwner         = (reqUser, ownerId)   => !isOwner(reqUser, ownerId);
// Возвращает НЕ является ли пользователь тем о ком запрашиваются данные
export const isNoThisUser      = (reqUser, userId)    => !isThisUser(reqUser, userId);
// Запрашиваемая компания НЕ является компанией пользователя
export const isNoThisCompanyId = (reqUser, companyId) => !isThisCompanyId(reqUser, companyId);
    



/**
 * Возвращает роль пользователя который производит запрос
 * @param {Object} reqUser 
 * @param {String} userId
 * @returns {String}
 */
export const whoIsRequester = (reqUser, userId) => { // Test +++
  if (isNoRoleOwner(reqUser) && isNoThisUser(reqUser, userId)) return RoleRequester.UserAnotherUser;
  if (isNoRoleOwner(reqUser) && isThisUser(reqUser, userId))   return RoleRequester.UserUser;
  if (isRoleOwner(reqUser)   && isNoThisUser(reqUser, userId)) return RoleRequester.OwnerUser;
  if (isRoleOwner(reqUser)   && isThisUser(reqUser, userId))   return RoleRequester.OwnerOwner;
};

/**
 * Проверяем разрешена ли данная операция для Запросителя
 * @param {String} requister 
 * @param {Array<RoleRequester>} expectedCredentials - массив ролей Запросителей для кого разрешена данная операция
 * @returns {Boolean}
 */
export const validateRoleCredentials = (requister, expectedCredentials) => { // Test +++
  const result = expectedCredentials.find(cred => cred === requister);
  return Boolean(result);
};


/**
 * Является ли пользователь Администратором или Владельцем аккаунта
 * @param {Object} user 
 * @param {String} ownerId 
 * @returns {Object} {errors, valid}
 */
export const validationAdminAuthority = (user, ownerId) => { // Test +++
  let errors = {};

  if (isNoOwner(user, ownerId) && isNoRoleAdmin(user) && isNoRoleSuper(user)) {
    // console.log(`Не админ и не владелец пытается изменить данные`);
    errors.general = `Извините, у вас недостаточно прав для выполнения данной операции`;
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
};




