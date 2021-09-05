import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getScreenFormats } from '../../../../redux/selectors/ui-selectors';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
// Components
import LogoBtn from '../../../buttons/logo-btn/logo-btn';
import NavbarContent from '../content';
import DialogInfo from '../../../dialogs/dialog-info/dialog-info';
// Types
import { LogoBtnType } from '../../../../../types/btn';
import { ScreenFormats } from '../../../../../types/types';
import themes from '../../../../utils/themes/themes';


type Props = {
  screenFormats: ScreenFormats;
};


// Верхняя навигационная панель
const NavbarMobile: React.FC<Props> = ({ screenFormats }) => {
  if (!screenFormats.isMobile) return null;

  const [menu, setMenu] = React.useState(false);
  const handleMenuOpen = () => setMenu(true);
  const handleMenuClose = () => setMenu(false);


  return (
    <>
      <LogoBtn type={LogoBtnType.NAV_UP} />

      <Box sx={{ flexGrow: 1 }} />

      <IconButton onClick={handleMenuOpen}>
        <MenuIcon />
      </IconButton>
      
      <DialogInfo
        open={menu}
        title={``}
        children={<NavbarContent onClose={handleMenuClose} />}
        onClose={handleMenuClose}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  screenFormats: getScreenFormats(state),
});

export default connect(mapStateToProps)(NavbarMobile);
