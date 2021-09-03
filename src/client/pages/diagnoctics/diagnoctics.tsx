import * as React from 'react';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Components
import PageWrap from '../page-wrap/page-wrap';
// Types
import themes from '../../utils/themes/themes';

type Props = {
  
}

// Страница для диагностики стоп
const Diagnoctics: React.FC<Props> = ({  }) => {

  const body = (<>Диагностика стоп</>);


  return (
    <PageWrap>
      {
        body
      }
    </PageWrap>
  );
};


export default Diagnoctics;
