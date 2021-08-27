import * as React from 'react';
// Components
import NotificationsMenuBtn from '../../btn/notification-menu-btn/notification-menu-btn';
import UnreadedCommentBtn from '../../btn/unreaded-comments-btn/unreaded-comments-btn';
import ProfilesMenuBtn from '../../btn/profiles-menu-btn/profiles-menu-btn';


type Props = {
  authenticated: boolean;
};


// Кнопки Navbar меню после авторизации
const MenuBtns: React.FC<Props> = ({ authenticated }) => {
  if (!authenticated) return null;

  return (
    <>
      <NotificationsMenuBtn />
      <UnreadedCommentBtn />
      <ProfilesMenuBtn />
    </>
  );
};

export default MenuBtns;