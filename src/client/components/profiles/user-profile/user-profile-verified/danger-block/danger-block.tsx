import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import { updateUserProfile, deleteUser } from '../../../../../redux/actions/user-actions';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Component
import DeleteButton from '../../../../buttons/delete-button/delete-button';
// Types
import { DeleteBtnType } from '../../../../../../types/btn';
import { UserProfile, WhoInProfile } from '../../../../../../types/user';
import { State } from '../../../../../redux/redux-types';
import { SxProps } from '@material-ui/system';



type Props = {
  sx: SxProps;
  type: WhoInProfile;
  userProfile: UserProfile;
  deleteUser: (userId: string) => void;
  updateUserProfile: (newUserProfile: UserProfile) => void;
  onClose: () => void;
};


// Компонент профиль пользователя после верификации email
const DangerBlock: React.FC<Props> = ({ sx, type, userProfile, deleteUser, updateUserProfile, onClose }) => {

  // Удаление аккаунта
  const handleDeleteUserProfile = () => {
    deleteUser(userProfile.userId);
    onClose();
  };


  return (
    <Box sx={ sx }>
      <DeleteButton type={DeleteBtnType.USER_PROFILE} button onDel={handleDeleteUserProfile} />
      
    </Box>
  );
}

const mapStateToProps = (state: State) => ({
});

const mapActionsToProps = {
  updateUserProfile,
  deleteUser,
};

export default connect(mapStateToProps, mapActionsToProps)(DangerBlock);
