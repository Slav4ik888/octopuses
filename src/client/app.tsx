import * as React from 'react';
// Routes
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from './utils/routes/auth-route';
import PrivateRoute from './utils/routes/private-route';
import AdminRoute from './utils/routes/admin-route';
import route from './utils/routes/routes';
// Pages
// import Login from './pages/login/login';
import Signup from './pages/signup/signup';
// import Policy from './pages/policy/policy';

// Components
import Navbar from './components/navbar/navbar';
// import MessageBar from './components/dialogs/message-bar';
// import Root from './pages/root/root';
// import Footer from './components/footer/footer';
// import AcceptCookie from './components/auth/accept-cookie/accept-cookie';

// Functions
// import { checkAuth } from '../utils/auth/check-auth';
// import { checkAcceptCookie } from '../utils/auth/accept-cookie/accept-cookie';
import { ListSelectType } from '../types/btn';
import { history } from './utils/routes/history';
import screenListener from './utils/screens/listener-rezise-screen';
// DEV

// checkAcceptCookie();  // Check is user accept cookie and set in Store
// checkAuth();          // Проверяем есть ли актуальный cookie или токен пользователя
screenListener();     // Слушатель на изменение размеров экрана




const App = () => {


  return (
    <div className="wrapper">
      <Router history={history}>
        <header className="page-header">
          <Navbar />
        </header>
        {/* <AcceptCookie /> */}

        <main className="page-body">
          {/* <MessageBar /> */}
        
          <Switch>
            <AuthRoute exact path={route.SIGNUP} component={Signup} />
            {/* <AuthRoute exact path={route.LOGIN} component={Login} /> */}

            {/* <PrivateRoute exact path={route.COURSE} component={CourseContainer} /> */}

            {/* <AdminRoute exact path={route.USERS}
              render={() => <AdminUsersContainer 
                type={ListSelectType.USERS}
              />}
            /> */}
            
            
            <Route exact path={route.ROOT} component={Signup} />
            {/* <Route exact path={route.POLICY} component={Policy} /> */}

            <Route
              render={() => (
                <>
                  <h1>
                    404.
                    <br />
                    <small>Page not found</small>
                  </h1>
                  <Redirect to={route.ROOT} />
                </>
              )}
            />
          </Switch>
        </main>
        
        <footer className="page-footer">
          {/* <Footer /> */}
        </footer>

      </Router>
    </div>
  )
};

export default App;