import * as React from 'react';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../utils/routes/routes';
// Redux Stuff
import { connect } from 'react-redux';
import { getScreenFormats } from '../../../redux/selectors/ui-selectors';
import * as u from '../../../redux/selectors/user-selectors';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import PhoneBtn from '../btn/phone/phone';
// Functions
import logger from '../../../utils/client-logger/client-logger';
// Types & Consts
import { ScreenFormats } from '../../../../types/types';
import { Button } from '@mui/material';


const log = logger(`NavbarUser`);



type Props = {
  loadingUser: boolean;
  authenticated: boolean;
  screenFormats: ScreenFormats;
  onClose?: () => void; // For mobile, close opened window content after click
};


// Кнопки Navbar после авторизации
const NavbarNoUser: React.FC<Props> = ({ loadingUser, authenticated, screenFormats, onClose }) => {
  if (loadingUser || authenticated) return null;

  log(`Пользователь не авторизован`);
  
  
  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: () => screenFormats.isMobile ? `column` : `row`,
        justifyContent: `space-around`,
        alignItems: `center`,
        width: `100%`,
      }}
    >
      <Box sx={{flexGrow: 1}} />

      {/* <Button variant="text" color="secondary" onClick={onClose} sx={{ margin: { xs: `16px 0 8px 0` } }}>
        <Link to={RouteType.CATALOG}>
          Каталог
        </Link>
      </Button> */}
      
      {/* <Button variant="text" color="secondary" onClick={onClose} sx={{ margin: { xs: `16px 0 8px 0` } }}>
        <Link to={RouteType.DIAGNOSTICS}>
          Диагностика стоп
        </Link>
      </Button>

      <Button variant="text" color="secondary" onClick={onClose} sx={{ margin: { xs: `16px 0 8px 0` } }}>
        <Link to={RouteType.APPOINTMENT}>
          Запись
        </Link>
      </Button> */}

      <Box sx={{flexGrow: 1}} />
      <PhoneBtn />
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  screenFormats: getScreenFormats(state),
  loadingUser: u.getLoadingUser(state),
  authenticated: u.getAuthenticated(state),
});


export default connect(mapStateToProps)(NavbarNoUser);