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
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        {
          body
        }
      </Paper>
    </PageWrap>
  );
};


export default Contacts;
