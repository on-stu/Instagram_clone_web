import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from "./context/user";
import UserAuthListener from "./hooks/user-auth-listener";

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not-found'));
const DashBoard = lazy(() => import('./pages/dashboard'));

function App() {
  const { user } = UserAuthListener();

  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.NOT_FOUND} component={NotFound} />
            <Route path={ROUTES.DASHBOARD} component={DashBoard} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
