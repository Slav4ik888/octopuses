import * as React from 'react';
// MUI Stuff
import IconButton from '@material-ui/core/IconButton';
// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
// Components
import ProfilesMenu from '../../menus/profiles-menu/profiles-menu';


// Кнопка входа в личные кабинеты активация открытия / закрытия
const ProfilesMenuBtn: React.FC = () => {
  const [anchorPro, setAnchorPro] = React.useState(null);
  const isProfilesOpen = Boolean(anchorPro);
  const menuId = `profile-menu`;
  
  const handleProfilesMenuOpen = (event) => setAnchorPro(event.currentTarget);
  const handleProfilesMenuClose = () => setAnchorPro(null);

  return (
    <>
      <IconButton aria-label="account of current user" aria-controls={menuId} aria-haspopup="true"
        onClick={handleProfilesMenuOpen} color="inherit" edge="end" 
      >
        <AccountCircle />
      </IconButton>

      <ProfilesMenu
        open={isProfilesOpen}
        onClose={handleProfilesMenuClose}
        menuId={menuId}
        anchorEl={anchorPro}
      />
    </>
  );
};


export default ProfilesMenuBtn;
