import { uiActionType, userActionType, dataActionType } from './action-types';
import { Message, Errors } from '../../types/types';
import { UserProfile, UserStatusType, AdminUsersByStatus } from '../../types/user';


type TypeDispatch = uiActionType | userActionType | dataActionType;
type Payload = string | {};

export type Dispatch = (arg0: { type?: TypeDispatch; payload?: Payload }) => void;


export interface StateUI {
  loading: boolean;
  message: Message;
  errors: Errors;
  targetScroll: string;
  currentPageIdx: string;
};


export interface StateUser {
  authenticated: boolean;
  loading: boolean;
  userProfile: UserProfile;
};


export interface StateData {
  loading: boolean;
};


export interface State {
  UI: StateUI;
  user: StateUser;
  data: StateData;
};