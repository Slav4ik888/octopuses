import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { getAuthenticated, getIsRoleSuper } from '../../redux/selectors/user-selectors';
import { State } from '../../redux/redux-types';
// Routes
import {Route, Redirect} from 'react-router-dom';
import { RouteType } from './routes';


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
        if ( authenticated || isRoleSuper ) {
          return <Component {...props} />
        }
        else {
          return <Redirect to={RouteType.ROOT} />
        }
      }}
    />
  );
};

const mapStateToProps = (state: State) => ({
  authenticated: getAuthenticated(state),
  isRoleSuper: getIsRoleSuper(state),
});

export default connect(mapStateToProps)(PrivateRoute);
