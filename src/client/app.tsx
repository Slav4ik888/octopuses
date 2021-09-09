import * as React from 'react';
// Routes
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from './utils/routes/auth-route';
import PrivateRoute from './utils/routes/private-route';
import AdminRoute from './utils/routes/admin-route';
import { RouteType } from './utils/routes/routes';
// MUI
import Box from '@mui/material/Box';
// Pages
import Root from './pages/root/root';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Catalog from './pages/catalog/catalog';
import Appointment from './pages/appointment/appointment';
import Diagnostics from './pages/diagnoctics/diagnoctics';
import Contacts from './pages/contacts/contacts';
// import Policy from './pages/policy/policy';

// Components
import Navbar from './components/navbar/navbar/';
import MessageBar from './components/dialogs/message-bar/message-bar';
import Footer from './components/footer';
// import AcceptCookie from './components/auth/accept-cookie/accept-cookie';

// Functions
import { checkAuth } from '../utils/auth/check-auth/check-auth';
import getCatalog from './components/catalog/utils/get-catalog';
// import { checkAcceptCookie } from '../utils/auth/accept-cookie/accept-cookie';
import { ListSelectType } from '../types/btn';
import { history } from './utils/routes/history';
import screenListener from './utils/screens/listener-rezise-screen';
// DEV

// checkAcceptCookie();  // Check is user accept cookie and set in Store
checkAuth();          // Проверяем есть ли актуальный cookie или токен пользователя
screenListener();     // Слушатель на изменение размеров экрана
getCatalog();         // Загружаем каталог с товарами



const App = () => {

  return (
    <div className="wrapper">
      <Router history={history}>
        <Navbar />

        {/* <AcceptCookie /> */}

        <Box component="main" sx={{ flexGrow: 1, minHeight: `calc(100vh - 65px)` }}>
          <MessageBar />
        
          <Switch>
            <Route exact path={RouteType.CATALOG} component={Catalog} />
            <Route exact path={RouteType.APPOINTMENT} component={Appointment} />
            <Route exact path={RouteType.DIAGNOSTICS} component={Diagnostics} />
            <Route exact path={RouteType.CONTACTS} component={Contacts} />

            <AuthRoute exact path={RouteType.SIGNUP} component={Signup} />
            <AuthRoute exact path={RouteType.LOGIN} component={Login} />

            {/* <PrivateRoute exact path={RouteType.COURSE} component={CourseContainer} /> */}

            {/* <AdminRoute exact path={RouteType.USERS}
              render={() => <AdminUsersContainer 
                type={ListSelectType.USERS}
              />}
            /> */}
            
            
            {/* <Route exact path={RouteType.POLICY} component={Policy} /> */}
            <Route exact path={RouteType.ROOT} component={Catalog} />

            <Route
              render={() => (
                <>
                  <h1>
                    404.
                    <br />
                    <small>Page not found</small>
                  </h1>
                  <Redirect to={RouteType.ROOT} />
                </>
              )}
            />
          </Switch>
        </Box>
        
        <Footer />
      </Router>
    </div>
  )
};

export default App;