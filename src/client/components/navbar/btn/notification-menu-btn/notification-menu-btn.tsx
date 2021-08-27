import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
// import { getAdminTaskOnCheck, getTasks } from '../../../../redux/selectors/data-selectors';
import { getIsRoleSuper, getUserId } from '../../../../redux/selectors/user-selectors';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
// Components
import NotificationsMenu from '../../menus/notifications-menu/notifications-menu';
// Functions
import { createTitleByValue } from '../../utils/create-title-by-value';
// import { hasSomeoneChanges } from '../../../../utils/has-someone-changes';
// Types
import themes from '../../../../utils/themes/themes';



type Props = {
  userId: string;
  tasks?: [];
};

// Иконка для уведомлений о произошедших изменений
const NotificationMenuBtn: React.FC<Props> = ({ userId, tasks }) => {
  if (!userId) return null;

  // Вычленяем какие изменения произошли
  const notifications = React.useMemo(() => {
    // if (isSuper) return adminTaskOnCheck;
    // else {
    //   let tasksWithChanges = [];
    //   tasks.forEach((task) => {
    //     if (hasSomeoneChanges(task, userId)) {
    //       console.log(1, task);
    //       tasksWithChanges.push(task);
    //     }
    //   });
    //   return tasksWithChanges;
    // }
    return [];
  }, [tasks]);

  const notifsLength = notifications.length;

  const [anchorPro, setAnchorPro] = React.useState(null);
  const isNotificationsOpen = Boolean(anchorPro);
  const menuId = `notifications-menu`;
  const handleMenuOpen = (event) => notifsLength ? setAnchorPro(event.currentTarget) : null;
  const handleMenuClose = () => setAnchorPro(null);

  const toolTitle = createTitleByValue(`notifications`, notifsLength);


  return (
    <>
      <Tooltip title={toolTitle} placement="bottom" arrow enterDelay={1000} enterNextDelay={1000}>
        <IconButton onClick={handleMenuOpen} aria-label="new notifications" color="inherit">
          <Badge badgeContent={notifsLength}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: themes.badges.badge,
                height: `17px`,
                minWidth: `17px`,
                borderRadius: `50%`,
                fontSize: `10px`,
              },
            }}
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <NotificationsMenu
        open={isNotificationsOpen}
        onClose={handleMenuClose}
        menuId={menuId}
        anchorEl={anchorPro}
        notifications={notifications}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  userId: getUserId(state),
  // tasks: getTasks(state),
});

export default connect(mapStateToProps)(NotificationMenuBtn);
