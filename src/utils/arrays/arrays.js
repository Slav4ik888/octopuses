import { cloneObj } from '../objects/objects.js';
import { updateArrWithItemByField } from './update-arr-with-item-by-field/index.js';
import { getItemFromArrByField } from './get-item-from-arr-by-field/get-item-from-arr-by-field.js';


/**
 * Возвращает массив созданный из списка (псевдомассива), с добавлением id в виде key от списка
 * @param {Object} list 
 * @returns {Array}
 */
export const getArrayFromList = list => {
  let arr = [];
  for (let key in list) {
    let obj = {};
    obj = cloneObj(list[key]);
    obj.id = key;
    arr.push(obj);
  }
  return arr;
};


/**
 * Возвращает adminUsers с добавленным в нужном status updatedUser
 * предварительно удалив предыдущее (старое) значенине
 * @param {Array} adminUsers 
 * @param {Object} updatedUser 
 * 
 * @return {Array} adminUsers
 */
export const updateUserDataInAdminUsers = (adminUsers, updatedUser) => {
  let updatedAdminUsers = [...adminUsers];

  // Удаляем предыдущее значение
  updatedAdminUsers.forEach(item => {
    const idx = item.users.findIndex(user => user.userId === updatedUser.userId);

    if (idx !== -1) { // Если есть - обновляем
      item.users = [...item.users.slice(0, idx), ...item.users.slice(idx + 1)];
    } 
  });

  const status = updatedUser.status;

  // Побираем имеющихся users со status = status;
  let users = [];
  let usersObj = getItemFromArrByField(updatedAdminUsers, `status`, status);
  if (usersObj) {
    users = usersObj.users;
    users.push(updatedUser);
  }

  return updateArrWithItemByField(updatedAdminUsers, `status`, { status, users });
};


/**
 * Возвращает adminCompanies с добавленным в нужном status updatedCompany
 * предварительно удалив предыдущее (старое) значенине
 * @param {Array} adminCompanies 
 * @param {Object} updatedCompany 
 * 
 * @return {Array} adminCompanies
 */
export const updateCompanyDataInAdminCompanies = (adminCompanies, updatedCompany) => {
  let updatedAdminCompanies = [...adminCompanies];

  // Удаляем предыдущее значение
  updatedAdminCompanies.forEach(item => {
    const idx = item.companies.findIndex(company => company.companyId === updatedCompany.companyId);

    if (idx !== -1) { // Если есть - обновляем
      item.companies = [...item.companies.slice(0, idx), ...item.companies.slice(idx + 1)];
    } 
  });

  const status = updatedCompany.status;

  // Подбираем имеющиеся companies со status = status;
  let companies = [];
  let companiesObj = getItemFromArrByField(updatedAdminCompanies, `status`, status);
  if (companiesObj) {
    companies = companiesObj.companies;
    companies.push(updatedCompany);
  }

  return updateArrWithItemByField(updatedAdminCompanies, `status`, { status, companies });
};


/**
 * Возвращает список уникальных id из array, пример userId из tasks || companyId из usersProfiles
 * @param {Array} arr 
 * @param {String} field 
 * 
 * @return {Array}
 */
export const getItemsIdListFromArr = (arr, field) => {
  let itemsIdSet = new Set();
  arr.forEach(item => itemsIdSet.add(item[field]));

  let itemsIdList = [];
  for (let uid of itemsIdSet) itemsIdList.push(uid);

  return itemsIdList;
};


/**
 * Возвращает adminTaks c обновлённым task
 * @param {Array} arr - adminTaks
 * @param {Object} task 
 * @returns  {Array}
 */
export const updateOneTaskInAdminTasks = (arr, task) => {
  let updated = arr.slice(0);

  arr.forEach(((pageObj, i) => { // Перебираем все имеющиеся объекты (постранично)
    const idx = pageObj.tasks.findIndex(t => t.taskId === task.taskId && t.userId === task.userId);

    if (idx !== -1) { // Нашли
      updated[i].tasks = [...updated[i].tasks.slice(0, idx), task, ...updated[i].tasks.slice(idx + 1)];
    }

  }));

  return updated;
}