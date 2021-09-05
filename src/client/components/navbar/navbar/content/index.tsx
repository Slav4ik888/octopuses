import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import NavbarUser from '../../navbar-user/navbar-user';
import NavbarNoUser from '../../navbar-no-user/navbar-no-user';
// Types


type Props = {
  onClose?: () => void; // For mobile, close opened window content after click
}
// Верхняя навигационная панель
const NavbarContent: React.FC<Props> = ({ onClose }) => {

  return (
    <Box sx={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-around`,
      width: `100%`
    }}>
      <NavbarUser />
      <NavbarNoUser onClose={onClose} />
    </Box>
  );
};


export default NavbarContent;
