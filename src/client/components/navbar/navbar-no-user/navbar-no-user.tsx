import * as React from 'react';
import cl from 'classnames';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../utils/routes/routes';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
import * as u from '../../../redux/selectors/user-selectors';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import PhoneBtn from '../btn/phone/phone';
// Functions
import logger from '../../../utils/client-logger/client-logger';
// Types & Consts


const log = logger(`NavbarUser`);



type Props = {
  loadingUser: boolean;
  authenticated: boolean;
};


// Кнопки Navbar после авторизации
const NavbarNoUser: React.FC<Props> = ({ loadingUser, authenticated }) => {
  if (loadingUser || authenticated) return null;

  log(`Пользователь не авторизован`);
  
  
  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `space-around`,
        alignItems: `center`,
        width: `100%`,
      }}
    >
      <Link to={RouteType.CATALOG}>
        Каталог
      </Link>

      {/* <Box sx={{ flexGrow: 1 }} /> */}
      
      <Link to={RouteType.DIAGNOSTICS}>
        Диагностика стоп
      </Link>

      <Link to={RouteType.APPOINTMENT}>
        Запись
      </Link>

      <PhoneBtn />
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  loadingUser: u.getLoadingUser(state),
  authenticated: u.getAuthenticated(state),
});


export default connect(mapStateToProps)(NavbarNoUser);