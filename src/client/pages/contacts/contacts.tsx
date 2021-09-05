import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// Components
import PageWrap from '../page-wrap/page-wrap';
// Types
import themes from '../../utils/themes/themes';

type Props = {
  
}

// Страница для контактов
const Contacts: React.FC<Props> = ({  }) => {

  const body = (<>Контакты</>);


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


export default Contacts;
