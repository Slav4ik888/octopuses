// Redux
import store from '../../../client/redux/store.js';
import { getAllUserData } from '../../../client/redux/actions/user-actions.ts';
// Consts
import { MODE_AUTH_COOKIE } from '../../../consts.js';


export const checkAuth = () => {  
  if (MODE_AUTH_COOKIE) {
    store.dispatch(getAllUserData());
  }
};
