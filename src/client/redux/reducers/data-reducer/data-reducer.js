// Functions
import { extend } from '../../../../utils/objects/objects.js';
// Types
import { dataActionType } from '../../action-types.ts';
import { UserStatusType } from '../../../../types/user.ts';
// import { StateData } from '../../redux-types';


const initialState = {
  loading: false,
  
};



export default function (state = initialState, action) {
  switch (action.type) {
    case dataActionType.LOADING_DATA: // test ---
      return extend(state, {
        loading: true,
      });
    
    case dataActionType.LOADING_DATA_OFF: // test ---
      return extend(state, {
        loading: false,
      });
    
    case dataActionType.SET_INITIAL: // test ---
      return initialState;
    
    
     
    default: return state;
  }
};
