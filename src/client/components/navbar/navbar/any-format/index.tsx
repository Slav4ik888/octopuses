import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getScreenFormats } from '../../../../redux/selectors/ui-selectors';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import LogoBtn from '../../../buttons/logo-btn/logo-btn';
import NavbarMenuBtns from '../../navbar-menu-btns/navbar-menu-btns';
import NavbarContent from '../content';
// Types
import { LogoBtnType, ScreenFormats } from '../../../../../types/btn';



type Props = {
  screenFormats: ScreenFormats;
};


// Верхняя навигационная панель
const NavbarAnyFormat: React.FC<Props> = ({ screenFormats }) => {
  if (screenFormats.isMobile) return null;

  return (
    <>
      <LogoBtn type={LogoBtnType.NAV_UP} />

      <Box sx={{ flexGrow: 1 }} />

      <NavbarContent />

      <Box sx={{ flexGrow: 1 }} />

      <NavbarMenuBtns />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  screenFormats: getScreenFormats(state),
});


export default connect(mapStateToProps)(NavbarAnyFormat);
