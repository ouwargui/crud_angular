import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from './pages/login-page/Login';
import Home from './pages/home-page/Home';
import Signup from './pages/signup-page/Signup';
import ForgotPassword from './pages/forgot-password-page/ForgotPassword';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={Home} path="/home" />
      <Route component={Signup} path="/signup" />
      <Route component={ForgotPassword} path="/reset-password" />
    </BrowserRouter>
  );
};

export default Routes;
