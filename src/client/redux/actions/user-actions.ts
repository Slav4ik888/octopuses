import axios from 'axios'
// import route from '../../utils/routes/routes.js'
// Redux
import { userActionType, uiActionType, dataActionType } from '../action-types'
import { Dispatch } from '../redux-types'
// Functions
// import { getCookie } from '../../../utils/auth/cookies/cookies.js'
// import { autoLinkClick } from '../../../utils/files/auto-link-click'
import logger from '../../utils/client-logger/client-logger'
// Types & Consts
import { UserSignupData, UserLoginData, UserProfile, RegProtectionCase, RegProtectSequenceItem } from '../../../types/user'
import { MessageType } from '../../../types/messages';


const api = axios.create({
  baseURL: `/api`,
  timeout: 1000 * 10,
  withCredentials: true,
});


const log = logger(`user-actions`);


// const onSuccess = (response) => response;
// const onFail = (err) => {
//   if (err.response.status === 401) {
//     log(`Обработал ошибку 401`);
//     return {data: null};
//   }
//   return err;
// };

// api.interceptors.response.use(onSuccess, onFail);


// Регистрация новой компании START
// export const userSignup = (type: SignupType, newCompanyData: UserSignupData, answer: RegProtectionCase, history: any[]) => async (dispatch: Dispatch) => {
//   dispatch({ type: userActionType.LOADING_USER });

//   try {
//     let res: {
//       data: {
//         protectionCase?: RegProtectionCase;
//         newUser?: {};
//         newCompany?: {};
//         message?: {};
//       },
//     };

//     const setNewUser = (timeout: number = 0) => setTimeout(() => {    
//       dispatch({
//         type: userActionType.SET_USER,
//         payload: res.data.newUser,
//       });

//       dispatch({
//         type: userActionType.SET_COMPANY,
//         payload: res.data.newCompany,
//       });

//       dispatch({
//         type: uiActionType.SET_MESSAGE,
//         payload: {
//           message: res.data.message,
//           type: MessageType.SUCCESS,
//         }
//       });

//       if (MODE_AUTH_COOKIE) history.push(route.COURSE);
//       else history.push(route.ROOT);
//     }, timeout); // Через timeout секунды, войти в профиль


//     if (type === SignupType.START) {
//       res = await api.post(`/userSignupStart`, newCompanyData);
//       dispatch({
//         type: userActionType.SET_PROTECTION_CASE,
//         payload: res.data.protectionCase
//       });

//       if (newCompanyData.isMobile) setNewUser();
//     }
//     else {
//       res = await api.post(`/userSignupEnd`, Object.assign(newCompanyData, { answer }));
//       // setAuthorizationHeader(res.data.token);

//       let protCase = res.data.protectionCase;

//       // Когда вернётся проверенный ответ
//       if (!protCase.result) {
//         // Добавляем инфо об ошибке в item sequence
//         protCase.sequence = protCase.sequence.map((item: RegProtectSequenceItem) => {
//           const result = protCase.errors?.errIds?.find((err: number) => err === item.id);
//           if (result || result === 0) item.wrongAnswer = true;
//           else item.wrongAnswer = false;
//           return item;
//         });
//       }

//       dispatch({ type: userActionType.SET_PROTECTION_CASE, payload: protCase });

//       if (protCase.result) setNewUser(2000);
//     }

//     dispatch({ type: uiActionType.CLEAR_ERROR });
//   }
//   catch (err) {
//     log(err);
//     dispatch({ type: userActionType.SET_UNAUTHENTICATED });
//     dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
//   }
// }


// // // Завершение регистрации - отправка ответов пользователя
// // export const userSignupEnd = (newCompanyData: UserSignupData, answer: RegProtectionCase, history: any[]) => async (dispatch: Dispatch) => {
  
// //   dispatch({ type: userActionType.LOADING_USER });

// //   try {
// //     const res = await api.post(`/userSignupEnd`, Object.assign(newCompanyData, { answer }));
// //     // setAuthorizationHeader(res.data.token);

// //     let protCase = res.data.protectionCase;

// //     // Когда вернётся проверенный ответ
// //     // Добавляем инфо об ошибке в item sequence
// //     protCase.sequence = protCase.sequence.map((item: RegProtectSequenceItem) => {
// //       const result = protCase.errors?.errIds?.find((err: number) => err === item.id);
// //       if (result || result === 0) item.wrongAnswer = true;
// //       else item.wrongAnswer = false;
// //       return item;
// //     });

// //     dispatch({ type: userActionType.SET_PROTECTION_CASE, payload: protCase });
// //     dispatch({ type: uiActionType.CLEAR_ERROR });


// //     if (protCase.result) {
// //       setTimeout(() => {    
// //         dispatch({
// //           type: userActionType.SET_USER,
// //           payload: res.data.newUser,
// //         });

// //         dispatch({
// //           type: userActionType.SET_COMPANY,
// //           payload: res.data.newCompany,
// //         });

// //         dispatch({
// //           type: uiActionType.SET_MESSAGE,
// //           payload: {
// //             message: res.data.message,
// //             type: MessageType.SUCCESS,
// //           }
// //         });

// //         if (MODE_AUTH_COOKIE) history.push(route.COURSE);
// //         else history.push(route.ROOT);
// //       }, 2000); // Через 2 секунды, войти в профиль
// //     }
// //   }
// //   catch (err) {
// //     log(err);
// //     dispatch({ type: userActionType.SET_UNAUTHENTICATED });
// //     dispatch({ type: uiActionType.CLEAR_ERROR });
// //     dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
// //   }
// // }



// // Повторная отправка ссылки для подтверждения почты


// export const sendEmailConfirmation = (email: string) => async (dispatch: Dispatch) => {
//   dispatch({ type: userActionType.LOADING_USER });
//   try {
//     const res = await api.get(`/sendEmailConfirmation/${email}`);
//     dispatch({
//       type: uiActionType.SET_MESSAGE,
//       payload: {
//         message: res.data.message,
//         type: MessageType.SUCCESS,
//         timeout: 6000,
//       }
//     });
//     dispatch({ type: uiActionType.CLEAR_ERROR });
//     dispatch({ type: userActionType.LOADING_USER_OFF });

//   } catch (err) {
//     log(err);
//     dispatch({ type: userActionType.SET_UNAUTHENTICATED });
//     dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
//   }
// }


// Отправить ссылку для восстановления пароля
export const sendPasswordResetEmail = (email: string) => async (dispatch: Dispatch) => {
  dispatch({ type: userActionType.LOADING_USER });

  try {
    const res = await api.post(`/sendPasswordResetEmail`, { email });

    dispatch({
      type: uiActionType.SET_MESSAGE,
      payload: {
        message: res.data.message,
        type: MessageType.SUCCESS,
        timeout: 6000,
      }
    });
    
    dispatch({ type: uiActionType.CLEAR_ERROR });
    dispatch({ type: userActionType.LOADING_USER_OFF });

  } catch (err) {
    log(err);
    dispatch({ type: userActionType.LOADING_USER_OFF });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
}


// // Приглашаем и регистрируем пользователя для компании
// export const userAdd = (user) => (dispatch: Dispatch) => {
//   dispatch({ type: userActionType.LOADING_USER });

//   const newUser = {
//     email: user.email,
//     firstName: user.firstName,
//     secondName: user.secondName,
//     middleName: user.middleName,
//     password: `qazwsx12`,
//     confirmPassword: `qazwsx12`,
//   };

//   return api.post(`/userAdd`, newUser)
//     .then((res) => {
//       const { newUser, message } = res.data;
//       // dispatch({
//       //   type: dataActionType.CREATE_EMPLOYEE,
//       //   payload: newUser,
//       // });
//       dispatch({
//         type: uiActionType.SET_MESSAGE,
//         payload: {
//           message,
//           type: MessageType.SUCCESS,
//         }
//       });

//       dispatch({ type: uiActionType.CLEAR_ERROR });
//     })
//     .catch((err) => {
//       log(err);
//       dispatch({ type: userActionType.SET_UNAUTHENTICATED });
//       dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
//     });
// }


// // Вход пользователя, загрузка стартовых данных
// export const userLogin = (userData: UserLoginData, history: any[]) => (dispatch) => {
//   dispatch({ type: userActionType.LOADING_USER });
  
//   const csrfToken = getCookie('session');
//   log('csrfToken: ' + csrfToken);
  
//   return api.post(`/userLogin`, { userData, csrfToken })
//     .then((res) => {
//       if (MODE_AUTH_TOKEN) setAuthorizationHeader(res.data.token);
//       log('COOKIE: ' + res.data );

//       // Загружаем данные по user & company & ( tasks || for role.SUPER )
//       dispatch(getUserAndCompanyData()); 
//       dispatch({ type: uiActionType.CLEAR_ERROR });

//       if (MODE_AUTH_COOKIE) {
//         dispatch({ type: userActionType.LOADING_USER_OFF });
//         history.push(route.COURSE);
//       }
//       else history.push(route.ROOT);
//     })
//     .catch((err) => {
//       log(err);
//       dispatch({ type: userActionType.SET_UNAUTHENTICATED });
//       dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
//     });
// }


// // Установка авторизационных заголовков
// const setAuthorizationHeader = (token: string) => {
//   const OsnovaIdToken = `Bearer ${token}`;
//   localStorage.setItem(`OsnovaIdToken`, OsnovaIdToken);
//   // log(`H axios: `, api.defaults.headers);
//   api.defaults.headers.common[`Authorization`] = OsnovaIdToken;
// }


// // Выход пользователя
// export const userLogout = () => async (dispatch: Dispatch) => {
//   if (MODE_AUTH_TOKEN) {
//     localStorage.removeItem(`OsnovaIdToken`);
//     delete api.defaults.headers.common[`Authorization`];
//   }
//   else {
//     try {
//       await api.get(`/userLogout`);

//     } catch(err) {
//       log(err);
//     }
//   }

//   dispatch({ type: userActionType.SET_UNAUTHENTICATED });
//   dispatch({ type: dataActionType.SET_INITIAL }); // Очищаем данные в data-reducer
//   dispatch({ type: uiActionType.CLEAR_ERROR });
// }


// // Получение данных о пользователе
// export const getUserProfile = ({ companyId, userId }) => (dispatch: Dispatch) => {
//   dispatch({ type: userActionType.LOADING_USER });
  
//   return api.post(`/getUserProfile`, { companyId, userId })
//     .then((res) => {
//       dispatch({
//         type: userActionType.SET_USER,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       log(err);
//       dispatch({ type: userActionType.SET_UNAUTHENTICATED });
//       dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
//     });
// }


// // Получение данных сразу и о компании и о пользователе
// export const getUserAndCompanyData = () => async (dispatch) => {
//   dispatch({ type: userActionType.LOADING_USER });

//   try {
//     const res = await api.get(`/getUserAndCompanyData`);
//     const { userData, companyData } = res.data;

//     dispatch({
//       type: userActionType.SET_COMPANY,
//       payload: companyData,
//     });
//     dispatch({
//       type: userActionType.SET_USER,
//       payload: userData,
//     });


//     if (isRoleSuper(userData)) {
//       log(`Вошёл администратор курса, загружаем непрочитанные комментарии`);
      
//       const resComments = await api.get(`/getUnreadedComments`);
//       dispatch({
//         type: dataActionType.ADD_UNREADED_COMMENTS,
//         payload: resComments.data.unreadedComments
//       });

//       // log(`Загружаем профили пользователей и компаний`);
//       const resProfiles = await api.get(`/adminGetUsersAndCompaniesProfiles`);
//       const { usersProfiles, companiesProfiles } = resProfiles.data;
      
//       dispatch({
//         type: dataActionType.ADMIN_ADD_USERS_PROFILES,
//         payload: usersProfiles,
//       });
//       dispatch({
//         type: dataActionType.ADMIN_ADD_COMPANIES_PROFILES,
//         payload: companiesProfiles,
//       });

//       // log(`Загружаем задания в статусе ON_CHECK`);
//       const resTaskOnCheck = await api.get(`/adminGetTasksByStatusOnCheck`);
//       dispatch({
//         type: dataActionType.ADMIN_SET_TASK_ON_CHECK,
//         payload: resTaskOnCheck.data
//       });

//     } else {
//       log(`Вошёл пользователь`);

//       if (
//         isSubscribe(companyData.subscribes.subscribe) ||
//         isDemoSubscribe(companyData.subscribes.subscribe)
//       ) {
//         log(`Подписка оформлена, загружаем задания и непрочитанные комментарии`);

//         const resComments = await  api.get(`/getUnreadedComments`)
//         dispatch({
//           type: dataActionType.ADD_UNREADED_COMMENTS,
//           payload: resComments.data.unreadedComments,
//         });

//         dispatch(getAllTasksByUserId()); // Загружаем все задания пользователя

//       } else {
//         log(`Подписка не оформлена`);
//       }
//     }

//     dispatch({ type: uiActionType.CLEAR_ERROR });

//   } catch (err) {
//     log(err);
//     dispatch({ type: userActionType.SET_UNAUTHENTICATED });
//   }
// }


// // Обновляем данные о пользователе
// export const updateUserProfile = (userProfile: UserProfile, type?: WhoInProfile) => async (dispatch: Dispatch) => {
//   try {
//     const res = await api.post(`/updateUserProfile`, userProfile);
//     dispatch({
//       type: uiActionType.SET_MESSAGE,
//       payload: {
//         message: res.data.message,
//         type: MessageType.SUCCESS,
//       },
//     });

//     // Если обновил Супервайзер курса, то обновить данные о пользователе в списке
//     if (type === WhoInProfile.SUPER) {
//       dispatch({
//         type: dataActionType.ADMIN_UPDATE_USER_IN_ADMIN_USERS,
//         payload: userProfile,
//       });
//     } else {
//       dispatch({
//         type: userActionType.SET_USER,
//         payload: userProfile,
//       });
//     }
//   } catch (err) {
//     log(err);
//     dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
//   }
// }




// // Удаляем пользователя
// export const deleteUser = (companyId: string, userId: string) => async (dispatch) => {
//   try {
//     const res = await api.delete(`/deleteUser/${companyId}/${userId}`);
    
//     let type: MessageType, message: string;
    
//     if (res.data?.message) {
//       message = res.data?.message;
//       type = MessageType.SUCCESS;
//       dispatch(userLogout());
//     }
//     else if (res.data?.warning) {
//       message = res.data?.warning;
//       type = MessageType.WARNING;
//     }
//     else if (res.data?.error) {
//       message = res.data?.error;
//       type = MessageType.ERROR;
//     }

//     dispatch({ type: uiActionType.SET_MESSAGE, payload: { message, type, timeout: 30000 } });
//   }
//   catch (err) {
//     log(err);
//     dispatch({ type: uiActionType.SET_MESSAGE, payload: { message: err.response?.data.error, type: MessageType.ERROR } });
//     dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
//   }
// }




