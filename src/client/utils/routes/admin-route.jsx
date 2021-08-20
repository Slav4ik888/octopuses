import React from 'react';
import pt from 'prop-types';
// Redux
import {connect} from 'react-redux';
import { getAuthenticated, getIsRoleSuper } from '../../redux/selectors/user-selectors';
// Routes
import {Route, Redirect} from 'react-router-dom';
import route from './routes';


const AdminRoute = ({ exact, path, render, authenticated, isRoleSuper }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (authenticated === true && isRoleSuper === true) {
          return render();

        } else {
          return <Redirect to={route.ROOT} />;
        }
      }}
    />
  );
};

AdminRoute.propTypes = {
  exact: pt.bool.isRequired,
  path: pt.string.isRequired,
  render: pt.func.isRequired,
  authenticated: pt.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: getAuthenticated(state),
  isRoleSuper: getIsRoleSuper(state),

});

export default connect(mapStateToProps)(AdminRoute);
