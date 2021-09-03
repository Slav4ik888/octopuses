import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { getAuthenticated } from '../../redux/selectors/user-selectors';
import { State } from '../../redux/redux-types';
// Routes
import {Route, Redirect} from 'react-router-dom';
import { RouteType } from './routes';


type Props = {
  component: React.ElementType;
  authenticated: boolean;
  exact: boolean;
  path: string;
}

const AuthRoute: React.FC<Props> = (props: Props) => {
  const { component: Component, authenticated, exact } = props;
  
  return (
    <Route
      exact={exact}
      render={(props) => authenticated === true ?
        <Redirect to={RouteType.ROOT} /> :
        <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state: State) => ({
  authenticated: getAuthenticated(state),
});

export default connect(mapStateToProps)(AuthRoute);
