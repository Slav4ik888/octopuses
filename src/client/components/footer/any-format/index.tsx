import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getScreenFormats } from '../../../redux/selectors/ui-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
// Components
import LogoBtn from '../../buttons/logo-btn/logo-btn';
import Copyright from '../copyright';
// import NavbarContent from '.content';
import DialogInfo from '../../dialogs/dialog-info/dialog-info';
// Types
import { LogoBtnType } from '../../../../types/btn';
import { ScreenFormats } from '../../../../types/types';
import themes from '../../../utils/themes/themes';


type Props = {
  screenFormats: ScreenFormats;
};


const FooterAnyFormat: React.FC<Props> = ({ screenFormats }) => {
  if (screenFormats.isMobile) return null;

  return (
    <Box sx={{ display: `flex`, flexGrow: 1, justifyContent: `space-around` }}>
      <LogoBtn type={LogoBtnType.NAV_UP} />
      <Copyright screenFormats={screenFormats} />
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
  screenFormats: getScreenFormats(state),
});

export default connect(mapStateToProps)(FooterAnyFormat);
