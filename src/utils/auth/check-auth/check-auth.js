// Redux
import store from '../../../client/redux/store.js';
import { getAllUserData } from '../../../client/redux/actions/user-actions.ts';
// Consts
import { MODE_AUTH_COOKIE, ENV } from '../../../consts/consts.js';


export const checkAuth = () => {  
  if (MODE_AUTH_COOKIE && ENV !== `development`) {
    store.dispatch(getAllUserData());
  }
};
