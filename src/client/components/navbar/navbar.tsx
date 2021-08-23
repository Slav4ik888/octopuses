import * as React from 'react';
// MUI Stuff
import { styled, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Components
import LogoBtn from '../buttons/logo-btn/logo-btn';
import NavbarMenuBtns from './navbar-menu-btns/navbar-menu-btns';
// import NavbarSuper from './navbar/navbar-super/navbar-super';
// import NavbarUser from './navbar/navbar-user/navbar-user';
// Types
import { LogoBtnType } from '../../../types/btn';




// Верхняя навигационная панель
const Navbar: React.FC = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <LogoBtn type={LogoBtnType.NAV_UP} />

          <Box sx={{ flexGrow: 1 }} />

          {/* <NavbarUser />
          <NavbarSuper /> */}

          <Box sx={{ flexGrow: 1 }} />

          <NavbarMenuBtns />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default Navbar;
