import * as React from 'react';
// MUI Stuff
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// Components
import PageWrap from '../page-wrap/page-wrap';
// Types
import themes from '../../utils/themes/themes';


type Props = {
  
}

// Страница для записи на приём
const Appointment: React.FC<Props> = ({  }) => {

  const body = (<>Запись на изготовление стелек</>);
  
  return (
    <PageWrap>
      <Paper
        elevation={0}
        variant="elevation"
        sx={{
          width: `100%`,
          maxWidth: `960px`,
          p: 4,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`
        }}
      >
        <Box>
          {body}
        </Box>
      </Paper>
    </PageWrap>
  );
};


export default Appointment;
