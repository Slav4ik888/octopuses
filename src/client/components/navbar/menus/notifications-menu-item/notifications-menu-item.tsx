import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setTargetScroll } from '../../../../redux/actions/ui-actions';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../../utils/routes/routes';
// MUI Stuff
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
// Components
// import TaskStatusBtn from '../../../buttons/task-status-btn/task-status-btn';
// Functions
// import { createListPanelId } from '../../../../utils/create-list-panel-id';
// Types
// import { TaskBtnType } from '../../../../../types/tasks';
import { Notify } from '../../../../../types/notifications';



type Props = {
  notify: Notify;
  setTargetScroll: (containerId: string) => void;
  onClose: () => void;
};


// Меню с уведомлениями для Navbar
const NotificationsMenuItem: React.FC<Props> = ({ notify, setTargetScroll, onClose }) => {
  

  const handleTaskClick = (notify: Notify) => {
    const containerId = ``; //createListPanelId(notify, `task`);
    setTargetScroll(containerId); // Создаём метку, куда перекрутить страницу
    onClose();
  };
  

  return (
    <div onClick={() => handleTaskClick(notify)}>
      <Link to={`${RouteType.ROOT}/taskId=${notify.taskId}`} >
        <Box 
          sx={{
            display: `flex`,
            flexDirection: `column`,
            whiteSpace: `nowrap`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            width: `350px`,
            maxHeight: `72px`
          }}
        >
          <Box
            sx={{
              color: `#607d8b`,
              whiteSpace: `nowrap`,
              overflow: `hidden`,
              textOverflow: `ellipsis`,
              fontSize: `0.8rem`,
            }}
          >
            {notify.userName}
          </Box>
          
          <Box
            sx={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <Box
              sx={{
                minWidth: `235px`,
                display: `flex`,
                flexDirection: `column`,
              }}
            >
              <Box
                sx={{
                  color: `#ccc`,
                  fontSize: `0.8rem`,
                }}
              >
                Тема задания
              </Box>
              
              <Tooltip title={notify.title} placement="top" arrow enterDelay={1000} enterNextDelay={1000}>
                <Box
                  sx={{
                    whiteSpace: `nowrap`,
                    overflow: `hidden`,
                    textOverflow: `ellipsis`,
                    fontStyle: `italic`,
                  }}
                >
                  "{notify.title}"
                </Box>
              </Tooltip>
            </Box>

          </Box>
        </Box>
      </Link>
    </div>
  )
};

const mapActionsToProps = {
  setTargetScroll,
};

export default connect(undefined, mapActionsToProps)(NotificationsMenuItem);
