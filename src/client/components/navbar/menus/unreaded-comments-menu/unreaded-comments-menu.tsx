import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setTargetScroll } from '../../../../redux/actions/ui-actions';
// Routes
import { Link } from 'react-router-dom';
import route from '../../../../utils/routes/routes';
// MUI Stuff
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// Functions
import { createListPanelId } from '../../utils/create-list-panel-id';
// Types
import { Comment } from '../../../../../types/messages';



type Props = {
  open: boolean;
  anchorEl: Element;
  menuId: string;
  unreadedComments: Array<Comment>;
  setTargetScroll: (containerId: string) => void;
  onClose: () => void;
}


// Меню с непрочитанными комментариями для Navbar
const UnreadedCommentsMenu: React.FC<Props> = ({ open, anchorEl, menuId, unreadedComments, setTargetScroll, onClose }) => {

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
          <Link to={`${route.ROOT}/taskId=${comment.id}`} >
            <Box sx={{ display: `flex`, alignItems: `center` }}>
              <Box sx={{
                mr: 2,
                '& .MuiAvatar-img': {
                  m: 0,
                  p: 0,
                  border: `none`,
                  boxShadow: `none`,
                }
              }}>
                <Avatar src={comment.avatarUrl} />
              </Box>
              <Box
                sx={{
                  whiteSpace: `normal`,
                  overflow: `hidden`,
                  textOverflow: `ellipsis`,
                  width: `300px`,
                  maxHeight: `72px`
                }}
              >
                <Typography component="span" variant="body1"
                  sx={{
                    display: 'inline',
                    mr: 1,
                    color: `#625f40`
                  }}
                >
                  {comment.userName}
                </Typography>
                <Typography component="span" variant="body2" sx={{ fontStyle: `italic` }}>
                  - "{comment.message}"
                </Typography>
              </Box>
            </Box>
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
