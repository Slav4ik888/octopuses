import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Types
import themes from '../../utils/themes/themes';

type Props = {
  children: Array<JSX.Element> | JSX.Element | Node;
  column?: boolean;
}

// Шаблон страницы
const PageWrap: React.FC<Props> = ({ children, column }) => {
  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: () => column ? `column` : `row`,
        justifyContent: `flex-start`,
        m: `auto`,
        p: { xs: 0, sm: 2 },
        width: `100%`,
        maxWidth: `1200px`,
        minHeight: `90vh`,
        background: `radial-gradient(${themes.main.background1}, ${themes.main.background2} 60%)`, // #3c83af, #0d5b89 60%)`
      }}
    >
      {
        children
      }
    </Box>
  );
};


export default PageWrap;
