import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import * as u from '../../redux/selectors/user-selectors';
import { State } from '../../redux/redux-types';
// Components
import CircularProgress from '../../components/buttons/circular-progress/circular-progress';
import RootAuthContainer from './root-auth-container/root-auth-container';
import RootNotAuthContainer from './root-not-auth-container/root-not-auth-container';
// Functions




type Props = {
  loadingUser: boolean;
  authenticated: boolean;
  isSuper: boolean;
  isVerified: boolean;
};


// Главная страница
const Root: React.FC<Props> = ({ loadingUser, authenticated, isSuper, isVerified }) => {
  if (loadingUser) return <CircularProgress loading={loadingUser} size={60} classname={{ position: `absolute`, top: `50%`, right: `50%`, color: `primary` }} />

  return (
    <>
      <RootAuthContainer
        authenticated={authenticated}
        isSuper={isSuper}
        isVerified={isVerified}
      />
      <RootNotAuthContainer
        authenticated={authenticated}
      />
    </>
  );
}

const mapStateToProps = (state: State) => ({
  loadingUser: u.getLoadingUser(state),
  authenticated: u.getAuthenticated(state),
  isSuper: u.getIsRoleSuper(state),
  isVerified: u.getIsEmailVerified(state),
});

export default connect(mapStateToProps)(Root);
