// Functions
import { extend } from '../../../../utils/objects/objects/objects.js';
import { getScreenFormats } from '../../../utils/screens/screens.js';
// Types
import { uiActionType } from '../../action-types.ts';
// import { StateUI } from '../redux-types'


const initialState = {
  loading: false,
  acceptedCookie: false, // Разрешение user use cookie
  screenFormats: {},     // Сurrent screen length
  message: {},           // Current message for display
  // {
  //   type: ``,
  //   timeout: 3000,
  //   message: `Всё ок!`,
  // }
  // setMessage({
  //   type: typeMessage.SUCCESS,
  //   timeout: 3000,
  //   message: getRandomElement(messagesForRightAnswer)
  // });

  errors: {              // Current error for display
    // email: ``,
    // password: ``,
    // sertificate: ``,
    // general: ``,
  },
  policy: ``,            // Политика конфиденциальности 
};


export default function (state = initialState, action) {

  switch (action.type) {
    case uiActionType.LOADING_UI:
      return extend(state, { loading: true });
    
    case uiActionType.LOADING_UI_OFF:
      return extend(state, { loading: false });
    
    case uiActionType.SET_SCREEN_FORMATS:
      return extend(state, { screenFormats: getScreenFormats(action.payload) });
    
    
    // When user accepted use cookie
    case uiActionType.SET_ACCEPTED_COOKIE:
      return extend(state, { acceptedCookie: action.payload });
    
    
    case uiActionType.SET_POLICY:
      return extend(state, {
        loading: false,
        policy: action.payload
      });
    
    case uiActionType.SET_ERROR:
      return extend(state, {
        loading: false,
        errors: action.payload,
      });
    
    case uiActionType.CLEAR_ERROR:
      return extend(state, {
        loading: false,
        errors: {},
      });
    
    case uiActionType.SET_MESSAGE:
      return extend(state, {
        loading: false,
        message: action.payload,
      });
    
    case uiActionType.CLEAR_MESSAGE:
      return extend(state, {
        loading: false,
        message: {},
      });
    
    default: return state;
  }
}
