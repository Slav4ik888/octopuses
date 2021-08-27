import * as React from 'react';
// Redux Stuff
import {connect} from 'react-redux';
import { userLogout } from '../../../../redux/actions/user-actions';
import { getAuthenticated, getUserRole } from '../../../../redux/selectors/user-selectors';
// MUI Stuff
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
// Icons
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import HomeIcon from '@material-ui/icons/Home';
// Components
import UserProfile from '../../../profiles/user-profile/user-profile';
// Types
import { State } from '../../../../redux/redux-types';
import { Role, WhoInProfile } from '../../../../../types/user';


type Props = {
  open: boolean;
  anchorEl: Element;
  menuId: string;
  role: Role;
  userLogout: () => void;
  onClose: () => void;
};


// Меню с профилями для Navbar
const ProfilesMenu: React.FC<Props> = ({ open, role, onClose, anchorEl, menuId, userLogout }) => {

  // Профиль пользователя
  const [userProfile, setUserProfile] = React.useState(false);
  const handleUserProfileOpen = () => {
    onClose();
    setUserProfile(true);
  };
  const handleUserProfileClose = () => setUserProfile(false);


  // Выход из аккаунта
  const handleUserLogout = () => {
    onClose();
    userLogout();
  }
  
  const type = role === Role.SUPER ? WhoInProfile.SUPER : WhoInProfile.USER;
  
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={handleUserProfileOpen}>
        <ListItemIcon>
          <AccountCircle fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Ваш профиль" />
      </MenuItem>

      <UserProfile
        open={userProfile}
        type={type}
        onClose={handleUserProfileClose}
      />

      <Divider />

      <MenuItem onClick={handleUserLogout}>
        <ListItemIcon>
          <KeyboardReturn fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Выйти" />
      </MenuItem>
    </Menu>
  )
};


const mapStateToProps = (state: State) => ({
  authenticated: getAuthenticated(state),
  role: getUserRole(state),
});

export default connect(mapStateToProps, { userLogout })(ProfilesMenu);
