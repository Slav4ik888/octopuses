import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// Components
import NavbarMobile from './mobile';
import NavbarAnyFormat from './any-format';
// Types
import themes from '../../../utils/themes/themes';



// Верхняя навигационная панель
const Navbar: React.FC = () => {

  return (
    <Box
      component="header"
      sx={{ flexShrink: 0, flexGrow: 1, zIndex: 100 }}
    >
      <AppBar
        position="static"
        sx={{
          maxHeight: 64,
          color: themes.header.color,
          backgroundColor: themes.header.background
        }}
      >
        <Toolbar sx={{ display: `flex`, alignItems: `center`, flexGrow: 1 }}>

          <NavbarMobile />
          <NavbarAnyFormat />

        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default Navbar;
