import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setTargetScroll } from '../../../../redux/actions/ui-actions';
// Routes
import { Link } from 'react-router-dom';
import route from '../../../../utils/routes/routes';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// Functions
import { createListPanelId } from '../../../../utils/create-list-panel-id';
// Types
import { Comment } from '../../../../../types/comments';


const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  menuItem: {
    display: `flex`,
    alignItems: `center`
  },
  avatar: {
    marginRight: theme.spacing(2),
    '& .MuiAvatar-img': {
      margin: 0,
      padding: 0,
      border: `none`,
      boxShadow: `none`,
    },
  },
  comment: {
    whiteSpace: `normal`,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    width: `300px`,
    maxHeight: `72px`
  },
  userName: {
    display: 'inline',
    marginRight: theme.spacing(1),
    color: `#625f40`
  },
  message: {
    fontStyle: `italic`
  }
}));


type Props = {
  open: boolean;
  onClose: () => void;
  anchorEl: Element;
  menuId: string;
  unreadedComments: Array<Comment>;
  setTargetScroll: (containerId: string) => void;
}


// Меню с непрочитанными комментариями для Navbar
const UnreadedCommentsMenu: React.FC<Props> = ({ open, onClose, anchorEl, menuId, unreadedComments, setTargetScroll }) => {
  const classes = useStyles();

  const handleCommentClick = (comment: Comment) => {
    const containerId = createListPanelId(comment, `comment`);
    setTargetScroll(containerId); // Создаём метку, куда перекрутить страницу
    onClose();
  };
  
  
  return (
    <Menu
      id={menuId} open={open} onClose={onClose}
      anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      {
        unreadedComments.map(comment => <MenuItem onClick={() => handleCommentClick(comment)} key={comment.id}>
          <Link to={`${route.COURSE}/taskId=${comment.taskId}`} >
            <div className={classes.menuItem}>
              <div className={classes.avatar}>
                <Avatar src={comment.avatarUrl} />
              </div>
              <div className={classes.comment}>
                <Typography component="span" variant="body1" className={classes.userName}>
                  {comment.userName}
                </Typography>
                <Typography component="span" variant="body2" className={classes.message}>
                  - "{comment.message}"
                </Typography>
              </div>
            </div>
          </Link>
        </MenuItem>
        )
      }
    </Menu>
  )
}

const mapActionsToProps = {
  setTargetScroll,
}

export default connect(undefined, mapActionsToProps)(UnreadedCommentsMenu);
