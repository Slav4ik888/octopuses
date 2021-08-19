// Functions
import { extend } from '../../../../utils/objects/objects.js';
// Types
import { userActionType } from '../../action-types.ts';
// import { StateUser } from '../redux-types'


const initialState = {
  authenticated: false,
  loading: false,
  protectionCase: {},
  userProfile: {},
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userActionType.LOADING_USER: // test +++
      return extend(state, {
        loading: true,
      });
      
    case userActionType.LOADING_USER_OFF: // test +++
      return extend(state, {
        loading: false,
      });

    case userActionType.SET_PROTECTION_CASE: // test +++
      return extend(state, {
        protectionCase: action.payload,
        loading: false,
      });
    
    case userActionType.SET_AUTHENTICATED: // test +++
      return extend(state, {
        authenticated: true,
        loading: false,
      });

    case userActionType.SET_UNAUTHENTICATED: // test +++
      return initialState;

    case userActionType.SET_USER: // test +++
      return extend(state, {
        authenticated: true,
        loading: false,
        userProfile: action.payload,
      });
    
    default: return state;
  }
}
