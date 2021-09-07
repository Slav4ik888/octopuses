import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// Components
import FooterMobile from './mobile';
import FooterAnyFormat from './any-format';
// Types
import themes from '../../utils/themes/themes';



// Верхняя навигационная панель
const Footer: React.FC = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          top: 'auto',
          bottom: 0,
          height: `max-content`,
          position: `relative`,
          backgroundColor: themes.footer.background,
          alignItems: `center`,
        }}
      >
        <Toolbar
          sx={{
            display: `flex`,
            alignItems: `flex-start`,
            justifyContent: `center`,
            // flexGrow: 1,
            width: `100%`,
            maxWidth: `1280px`,
            p: 3,
          }}>

          <FooterMobile />
          <FooterAnyFormat />

        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default Footer;
