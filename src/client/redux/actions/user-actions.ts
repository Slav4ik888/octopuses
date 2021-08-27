import axios from 'axios';
import route from '../../utils/routes/routes.js';
// Redux
import { userActionType, uiActionType, dataActionType } from '../action-types';
import { Dispatch } from '../redux-types';
// Functions
import { isRoleSuper } from '../../../utils/verifications/is/is.js';
import { getCookie } from '../../../utils/auth/cookies/cookies';
// import { autoLinkClick } from '../../../utils/files/auto-link-click';
import logger from '../../utils/client-logger/client-logger';
// Types & Consts
import { UserSignupData, UserLoginData, UserProfile } from '../../../types/user';
import { MessageType } from '../../../types/messages';


const api = axios.create({
  baseURL: `/api`,
  timeout: 1000 * 20,
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
export const userSignup = (userData: UserSignupData, history: any[]) => async (dispatch: Dispatch) => {
  
  dispatch({ type: userActionType.LOADING_USER });

  try {
    let res: {
      data: {
        newUser?: {};
        message?: {};
      },
    };

    res = await api.post(`/userSignup`, userData);
       
    dispatch({
      type: userActionType.SET_USER,
      payload: res.data.newUser,
    });

    dispatch({
      type: uiActionType.SET_MESSAGE,
      payload: {
        message: res.data.message,
        type: MessageType.SUCCESS,
      }
    });

    history.push(route.ROOT);

    dispatch({ type: uiActionType.CLEAR_ERROR });
  }
  catch (err) {
    log(err);
    dispatch({ type: userActionType.SET_UNAUTHENTICATED });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
}


// // Повторная отправка ссылки для подтверждения почты


export const sendEmailConfirmation = (email: string) => async (dispatch: Dispatch) => {
  dispatch({ type: userActionType.LOADING_USER });
  try {
    const res = await api.get(`/sendEmailConfirmation/${email}`);
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

  }
  catch (err) {
    log(err);
    dispatch({ type: userActionType.SET_UNAUTHENTICATED });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
}


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


// Вход пользователя, загрузка стартовых данных
export const userLogin = (userData: UserLoginData, history: any[]) => (dispatch) => {
  console.log('userData: ', userData);
  dispatch({ type: userActionType.LOADING_USER });
  
  const csrfToken = getCookie('session');
  log('csrfToken: ' + csrfToken);
  
  return api.post(`/userLogin`, { userData, csrfToken })
    .then((res) => {
      log('RES: ', res.data.userData );

      // Загружаем данные по user & ( tasks || for role.SUPER )
      dispatch(getAllUserData());

      dispatch({ type: uiActionType.CLEAR_ERROR });
      dispatch({ type: userActionType.LOADING_USER_OFF });
      history.push(route.ROOT);
    })
    .catch((err) => {
      log(err);
      dispatch({ type: userActionType.SET_UNAUTHENTICATED });
      dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
    });
}


// // Установка авторизационных заголовков
// const setAuthorizationHeader = (token: string) => {
//   const OsnovaIdToken = `Bearer ${token}`;
//   localStorage.setItem(`OsnovaIdToken`, OsnovaIdToken);
//   // log(`H axios: `, api.defaults.headers);
//   api.defaults.headers.common[`Authorization`] = OsnovaIdToken;
// }


// Выход пользователя
export const userLogout = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: userActionType.SET_UNAUTHENTICATED });
    dispatch({ type: dataActionType.SET_INITIAL }); // Очищаем данные в data-reducer
    dispatch({ type: uiActionType.CLEAR_ERROR });
    
    await api.get(`/userLogout`);

  }
  catch (err) {
    log(err);
  }
}


// Получение данных о пользователе
export const getUserProfile = ({ userId }) => (dispatch: Dispatch) => {
  dispatch({ type: userActionType.LOADING_USER });
  
  return api.post(`/getUserProfile`, { userId })
    .then((res) => {
      dispatch({
        type: userActionType.SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      log(err);
      dispatch({ type: userActionType.SET_UNAUTHENTICATED });
      dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
    });
}


// Получение данных сразу и о компании и о пользователе
export const getAllUserData = () => async (dispatch) => {
  dispatch({ type: userActionType.LOADING_USER });

  try {
    const res = await api.get(`/getAllUserData`);
    const { userData } = res.data;

    dispatch({
      type: userActionType.SET_USER,
      payload: userData,
    });


    if (isRoleSuper(userData)) {
      log(`Вошёл Суперадмин`);
      
      // const resComments = await api.get(`/getUnreadedComments`);
      // dispatch({
      //   type: dataActionType.ADD_UNREADED_COMMENTS,
      //   payload: resComments.data.unreadedComments
      // });

      // log(`Загружаем профили пользователей и компаний`);
      // const resProfiles = await api.get(`/adminGetUsersAndCompaniesProfiles`);
      // const { usersProfiles, companiesProfiles } = resProfiles.data;
      
      // dispatch({
      //   type: dataActionType.ADMIN_ADD_USERS_PROFILES,
      //   payload: usersProfiles,
      // });
      // dispatch({
      //   type: dataActionType.ADMIN_ADD_COMPANIES_PROFILES,
      //   payload: companiesProfiles,
      // });

      // log(`Загружаем задания в статусе ON_CHECK`);
      // const resTaskOnCheck = await api.get(`/adminGetTasksByStatusOnCheck`);
      // dispatch({
      //   type: dataActionType.ADMIN_SET_TASK_ON_CHECK,
      //   payload: resTaskOnCheck.data
      // });
    }
    else {
      log(`Вошёл USER`);

      // const resComments = await  api.get(`/getUnreadedComments`)
      // dispatch({
      //   type: dataActionType.ADD_UNREADED_COMMENTS,
      //   payload: resComments.data.unreadedComments,
      // });

      // dispatch(getAllTasksByUserId()); // Загружаем все задания пользователя
    }

    dispatch({ type: uiActionType.CLEAR_ERROR });
  }
  catch (err) {
    log(err);
    dispatch({ type: userActionType.SET_UNAUTHENTICATED });
  }
}


// Обновляем данные о пользователе
export const updateUserProfile = (userProfile: UserProfile) => async (dispatch: Dispatch) => {
  try {
    const res = await api.post(`/updateUserProfile`, userProfile);
    dispatch({
      type: uiActionType.SET_MESSAGE,
      payload: {
        message: res.data.message,
        type: MessageType.SUCCESS,
      },
    });
  }
  catch (err) {
    log(err);
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
}


// Удаляем пользователя
export const deleteUser = (userId: string) => async (dispatch) => {
  try {
    const res = await api.delete(`/deleteUser/${userId}`);
    
    let type: MessageType, message: string;
    
    if (res.data?.message) {
      message = res.data?.message;
      type = MessageType.SUCCESS;
      dispatch(userLogout());
    }
    else if (res.data?.warning) {
      message = res.data?.warning;
      type = MessageType.WARNING;
    }
    else if (res.data?.error) {
      message = res.data?.error;
      type = MessageType.ERROR;
    }

    dispatch({ type: uiActionType.SET_MESSAGE, payload: { message, type, timeout: 30000 } });
  }
  catch (err) {
    log(err);
    dispatch({ type: uiActionType.SET_MESSAGE, payload: { message: err.response?.data.error, type: MessageType.ERROR } });
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
}




