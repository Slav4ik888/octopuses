import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getUnreadedComments } from '../../../../redux/selectors/data-selectors';
import { getUserId } from '../../../../redux/selectors/user-selectors';
// MUI Stuff
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';       
// Icons
import CommentIcon from '@material-ui/icons/Chat';
// Components
import UnreadedCommentsMenu from '../../menus/unreaded-comments-menu/unreaded-comments-menu';
// Functions
// import { getUnredeadCommentsByTaskOwnerId, getUnredeadCommentsByAdminId } from '../../../../utils/comments/comments';
import { createTitleByValue } from '../../utils/create-title-by-value';
// Types
import { State } from '../../../../redux/redux-types';
import { Comment } from '../../../../../types/messages';
import themes from '../../../../utils/themes/themes';


const useStyle = makeStyles(() => ({
  badge: {
    '& .MuiBadge-badge': {
      backgroundColor: themes.badges.badge,
      height: `17px`,
      minWidth: `17px`,
      borderRadius: `50%`,
      fontSize: `10px`,
    },
  },
}));


type Props = {
  userId: string;
  unreadedComments: Array<Comment>;
};


// Иконка для уведомления о наличии непрочитанных комментариев
const UnreadedCommentBtn: React.FC<Props> = ({ userId, unreadedComments }) => {
  if (!userId) return null;
  
  const unreaded = React.useMemo(() => {
    return unreadedComments.length
  }, [unreadedComments]);

  const [anchorPro, setAnchorPro] = React.useState(null);
  const isCommentsOpen = Boolean(anchorPro);
  const menuId = `unreaded-comments-menu`;
  const handleMenuOpen = (event) => unreaded ? setAnchorPro(event.currentTarget) : null;
  const handleMenuClose = () => setAnchorPro(null);

  const toolTitleComment = createTitleByValue(`comments`, unreaded);
  
  
  return (
    <>
      <Tooltip title={toolTitleComment} placement="bottom" arrow enterDelay={1000} enterNextDelay={1000}>
        <IconButton onClick={handleMenuOpen} aria-label="unreaded comments" color="inherit">
          <Badge
            badgeContent={unreaded}
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
            <CommentIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <UnreadedCommentsMenu
        open={isCommentsOpen}
        onClose={handleMenuClose}
        menuId={menuId}
        anchorEl={anchorPro}
        unreadedComments={unreadedComments}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  userId: getUserId(state),
  unreadedComments: getUnreadedComments(state),
});

export default connect(mapStateToProps)(UnreadedCommentBtn);
