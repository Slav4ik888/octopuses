import axios from 'axios';
// Redux
import { dataActionType, uiActionType } from '../action-types';
import { Dispatch } from '../redux-types';
// Functions
import logger from '../../utils/client-logger/client-logger';
// Types
import { MessageType, WhoInProfile } from '../../../types/types';
import { UserStatusType, UserProfile } from '../../../types/user';
import { FileOperationType, FileType } from '../../../types/files';


axios.defaults.baseURL = `/api`;


const log = logger(`data-actions`);


