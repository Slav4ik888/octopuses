import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
import * as u from '../../../redux/selectors/user-selectors';
// Functions
import logger from '../../../utils/client-logger/client-logger';
// Types & Consts


const log = logger(`NavbarUser`);



type Props = {
  loadingUser: boolean;
  authenticated: boolean;
  isVerified: boolean;
  history?: { location: { pathname: string }, push: (path: string) => void };
};


// Кнопки Navbar после авторизации
const NavbarUser: React.FC<Props> = ({ loadingUser, authenticated, isVerified, history }) => {
  if (loadingUser || !authenticated) return null;

  log(`Пользователь авторизован`);
  log(`isVerified: `, isVerified);
  log(`history: `, history);
  
  
  return (
    <>
      
    </>
  );
};


const mapStateToProps = (state: State) => ({
  loadingUser: u.getLoadingUser(state),
  authenticated: u.getAuthenticated(state),
  isVerified: u.getIsEmailVerified(state),
});


export default connect(mapStateToProps)(NavbarUser);