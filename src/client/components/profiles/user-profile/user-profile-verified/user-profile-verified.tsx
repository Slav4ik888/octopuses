import * as React from 'react';
import dayjs = require('dayjs');
import 'dayjs/locale/ru';
// Readux Stuff
import { connect } from 'react-redux';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
// Component
import DangerBlock from './danger-block/danger-block';
import ListSelect from '../../../lists/list-select/list-select';
// Functions
// import { arrFromObjByObj } from '../../../../utils/objects/objects';
// Types
import { WhoInProfile, NewUserStatusType } from '../../../../../types/user';
import { ListSelectType } from '../../../../../types/btn';
import { UserProfile } from '../../../../../types/user';

// Создаём массив объектов с field = status из объекта 
// const typeUserStatusArray = arrFromObjByObj(UserStatusType, `status`);


const rowStyle = {
  display: `flex`,
  alignItems: `flex-end`,
  margin: `16px 0`,
};

const fieldStyle = {
  margin: `10px auto`,
};


type Props = {
  type: WhoInProfile;
  userProfile: UserProfile;
  onSetIsChange: (value: boolean) => void;
  onSetNewUserProfile: (newUserProfile: UserProfile) => void;
  onClose: () => void;
};


// Компонент профиль пользователя после верификации email
const UserProfileVerified: React.FC<Props> = ({ type, userProfile, onSetIsChange, onSetNewUserProfile, onClose }) => {


  const handleChange = (e) => {
    let userProfileUpdated = Object.assign({}, userProfile);
    const { name, id, value } = e.target;

    // const name = e.target.name;
    // const id = e.target.id;
    // const value = e.target.value;

    handleSetUserProfile(userProfileUpdated);
  };

  

  // Обновление подготовленными данными
  const handleSetUserProfile = (updated: UserProfile) => {
    onSetNewUserProfile(updated); 
    onSetIsChange(true);
  };


  return (
    <DialogContent>
      <form>
        <Box sx={rowStyle}>
          <TextField
            name="email" type="email" label="Email" sx={fieldStyle} disabled
            value={userProfile.email} fullWidth
          />
          <TextField
            name="createdAt" type="text" label="Зарегистрирован" sx={fieldStyle} disabled
            value={dayjs(userProfile.createdAt).locale(`ru`).format('DD MMMM YYYY')} fullWidth
          />
          
        </Box>
          
        <Box sx={rowStyle}>
          <TextField 
            id="fio" name="firstName" type="text" label="Имя" sx={fieldStyle}
            value={userProfile.fio.firstName} onChange={handleChange}
            tabIndex={10} fullWidth autoComplete="off"
          />
          <TextField
            id="fio" name="secondName" type="text" label="Фамилия" sx={fieldStyle}
            value={userProfile.fio.secondName} onChange={handleChange}
            tabIndex={11} fullWidth autoComplete="off"
          />
          <TextField 
            id="fio" name="middleName" type="text" label="Отчество" sx={fieldStyle}
            value={userProfile.fio.middleName} onChange={handleChange}
            tabIndex={12} fullWidth autoComplete="off"
          />
        </Box>


        <DangerBlock
          sx={rowStyle}
          type={type}
          userProfile={userProfile}
          onClose={onClose}
        />
        
      </form>
    </DialogContent>
  );
}

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(UserProfileVerified);
