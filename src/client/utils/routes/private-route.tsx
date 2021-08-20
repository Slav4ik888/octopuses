import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { getAuthenticated, getIsRoleSuper, getIsDemoSubscribe, getIsSubscribe } from '../../redux/selectors/user-selectors';
// Routes
import {Route, Redirect} from 'react-router-dom';
import route from './routes';


type Props = {
  component: React.ElementType;
  // render: () => React.ReactNode;
  authenticated: boolean;
  isDemoSubscribe: boolean;
  isSubscribe: boolean;
  isRoleSuper: boolean;
  exact: boolean;
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, exact, path, authenticated, isRoleSuper, isDemoSubscribe, isSubscribe }) => {

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (
          authenticated && isDemoSubscribe ||
          authenticated && isSubscribe ||
          isRoleSuper
        ) {
          return <Component {...props} />
        }
        else {
          return <Redirect to={route.ROOT} />
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: getAuthenticated(state),
  isSubscribe: getIsSubscribe(state),
  isDemoSubscribe: getIsDemoSubscribe(state),
  isRoleSuper: getIsRoleSuper(state),
});

export default connect(mapStateToProps)(PrivateRoute);
