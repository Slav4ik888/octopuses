import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import { getAuthenticated } from '../../../redux/selectors/user-selectors';
// Components
import MenuBtns from './menu-bns/menu-btns';
import AuthBtn from './auth-btn/auth-btn';
// Types
import { State } from '../../../redux/redux-types';


type Props = {
  authenticated: boolean;
};


// Кнопки Navbar авторизация и профилей
const NavbarMenuBtns: React.FC<Props> = ({ authenticated }) => {
  return (
    <>
      <AuthBtn authenticated={authenticated} />
      <MenuBtns authenticated={authenticated} />
    </>
  );
};


const mapStateToProps = (state: State) => ({
  authenticated: getAuthenticated(state),
});

export default connect(mapStateToProps)(NavbarMenuBtns);