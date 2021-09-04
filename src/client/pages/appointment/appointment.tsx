import * as React from 'react';
// MUI Stuff
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
      {body}
    </PageWrap>
  );
};


export default Appointment;
