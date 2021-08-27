import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import { sendEmailConfirmation, updateUserProfile } from '../../../redux/actions/user-actions';
import { getLoadingUser, getUserProfile } from '../../../redux/selectors/user-selectors';
import { setMessage } from '../../../redux/actions/ui-actions';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import DialogActions from '@material-ui/core/DialogActions';
// Component
import DialogInfo from '../../dialogs/dialog-info/dialog-info';
import UserProfileVerified from './user-profile-verified/user-profile-verified';
import UserProfileUnverifed from './user-profile-unverifed/user-profile-unverifed';
import CancelSubmitBtn from '../../buttons/cancel-submit-btn/cancel-submit-btn';
// Types
import { Message } from '../../../../types/messages';
import { UserProfile, Role, WhoInProfile } from '../../../../types/user';



type Props = {
  open: boolean;
  type: WhoInProfile;
  loadingUser: boolean;
  userProfile?: UserProfile;
  updateUserProfile: (newUserProfile: UserProfile) => void;
  setMessage: (messageObject: Message) => void;
  sendEmailConfirmation: (email: string) => void;
  onClose: () => void;
};


const UserProfileComponent: React.FC<Props> = ({ open, type, loadingUser, userProfile, updateUserProfile, setMessage, sendEmailConfirmation, onClose }) => {
  if (!open) return null;

  const [isChange, setIsChange] = React.useState(false);
  const [newUserProfile, setNewUserProfile] = React.useState(userProfile);

  const handleClose = () => onClose();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    updateUserProfile(newUserProfile);
    onClose();
  };

  const handleSendEmailConfirmation = () => sendEmailConfirmation(userProfile.email);


  return (
    <>
      <DialogInfo
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        title={`Профиль пользователя`}
      >
        {
          newUserProfile.emailVerified
            ? <UserProfileVerified
              type={type}
              userProfile={newUserProfile}
              onSetNewUserProfile={setNewUserProfile}
              onSetIsChange={setIsChange}
              onClose={handleClose}
            />
            : <UserProfileUnverifed email={newUserProfile.email} />
        }
        
        <DialogActions
          sx={{
            p: { xs: 0, sm: 4 },
          }}
        >
          {
            newUserProfile.emailVerified
              ? <CancelSubmitBtn onCancel={handleClose} onSubmit={handleSubmit} disabled={!isChange} loading={false} />
              : <CancelSubmitBtn onCancel={handleClose} onSubmit={handleSendEmailConfirmation} submitText={`Повторно отправить ссылку`} loading={loadingUser}/>
          }
        </DialogActions>
      </DialogInfo>
    </>
  );
};


const mapStateToProps = (state: State) => ({
  loadingUser: getLoadingUser(state),
  userProfile: getUserProfile(state),
});

const mapActionsToProps = {
  updateUserProfile,
  setMessage,
  sendEmailConfirmation,
};

export default connect(mapStateToProps, mapActionsToProps)(UserProfileComponent);
