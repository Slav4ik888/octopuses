import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
// import { updateOneTask} from '../../../redux/actions/data-actions';
import { getUserId } from '../../../redux/selectors/user-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
// Components
// Functions
// Types
import { TaskStatusConst, typeTaskStatusArr } from '../../../../types/types-require';
import themes from '../../../utils/themes/themes';




type Props = {
  
}

// Рендер одного задания из TasksContainer
const CourseExecution: React.FC<Props> = ({  }) => {


  return (
    <Box sx={{}}>
      
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(CourseExecution);
