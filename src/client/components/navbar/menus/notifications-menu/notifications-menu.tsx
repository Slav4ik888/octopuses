import * as React from 'react';
import cl from 'classnames';
// Redux Stuff
import { connect } from 'react-redux';
// MUI Stuff
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// Components
import NotificationsMenuItem from '../notifications-menu-item/notifications-menu-item';
// Functions
// import { getTaskStatusByField } from '../../../../utils/objects/objects';
// Types
import { Notify } from '../../../../../types/notifications';
import { UserProfile } from '../../../../../types/user';
import { State } from '../../../../redux/redux-types';



type Props = {
  open: boolean;
  anchorEl: Element;
  menuId: string;
  notifications: Array<Notify>;
  onClose: () => void;
};


// Меню с уведомлениями для Navbar
const NotificationsMenu: React.FC<Props> = ({ open, anchorEl, menuId, notifications, onClose }) => {
  if (!notifications?.length) return null;


  const notifies = React.useMemo(() => notifications.map((notify) => {
    let nofy: Notify = Object.assign({ statusTitle: ``, userName: `` }, notify);
    // taskNotify.statusTitle = getTaskStatusByField(notify.status, `status`, `title`);
    nofy.statusTitle = `status`;

    return nofy;
  }), [notifications]);
  

  return (
    <Menu
      open={open}
      id={menuId}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      {
        notifies.map((notify, i) => <MenuItem
          key={notify.taskId + notify.userId}
          sx={{
            borderTop: () => i !== 0 ? `1px solid #ececec` : ``,
          }}
        >
          <NotificationsMenuItem
            notify={notify}
            onClose={onClose}
          />
        </MenuItem>)
      }
    </Menu>
  )
};


const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(NotificationsMenu);