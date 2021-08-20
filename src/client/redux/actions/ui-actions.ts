import axios from 'axios';
import { Dispatch } from '../redux-types';
import { uiActionType } from '../action-types';
import { Errors } from '../../../types/results';
import { Message } from '../../../types/messages';
// Functions
// import { setAcceptCookie as setAcceptCookieToLocalStorage } from '../../../utils/auth/accept-cookie/accept-cookie';
import logger from '../../utils/client-logger/client-logger';



const log = logger(`ui-actions`);


const api = axios.create({
  baseURL: `/api`,
  timeout: 1000 * 10,
  withCredentials: true,
});



// Сохраняем значение текущего размера окна браузера пользователя
export const setScreenFormats = (size: number) => (dispatch: Dispatch) => {
  return dispatch({ type: uiActionType.SET_SCREEN_FORMATS, payload: size })
};


// Set accept cookie
// export const setAcceptCookie = (result: boolean) => async (dispatch: Dispatch) => {
//   setAcceptCookieToLocalStorage();
  
//   return dispatch({ type: uiActionType.SET_ACCEPTED_COOKIE, payload: result });
// };


// Получаем Политику конфиденциальности
export const getPolicy = () => async (dispatch: Dispatch) => {
  dispatch({ type: uiActionType.LOADING_UI });

  try {
    const res = await api.get(`/getPolicy`);
    dispatch({
      type: uiActionType.SET_POLICY,
      payload: res.data.policy
    });

  } catch (err) {
    log(err);
    dispatch({ type: uiActionType.SET_ERROR, payload: err.response?.data });
  }
};


// Сохраняем сообщение для пользователя
export const setMessage = (message: Message) => (dispatch: Dispatch) => {
  dispatch({
    type: uiActionType.SET_MESSAGE,
    payload: message,
  });
};

// Очищаем сообщение
export const clearMessage = () => (dispatch: Dispatch) => dispatch({ type: uiActionType.CLEAR_MESSAGE });


// Сохраняем ошибку
export const setErrors = (errors: Errors) => (dispatch: Dispatch) => {
  dispatch({ type: uiActionType.SET_ERROR, payload: errors })
};


// Очищаем ошибки
export const clearErrors = () => (dispatch: Dispatch) => dispatch({ type: uiActionType.CLEAR_ERROR });

