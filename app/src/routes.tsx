import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from './pages/login-page/Login';
import Home from './pages/home-page/Home';
import Signup from './pages/signup-page/Signup';
import ForgotPassword from './pages/forgot-password-page/ForgotPassword';
import Sneaker from './pages/sneaker-page/Sneaker';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={Home} path="/home" />
      <Route component={Signup} path="/signup" />
      <Route component={ForgotPassword} path="/reset-password" />
      <Route component={Sneaker} path="/sneakers/:id" />
    </BrowserRouter>
  );
};

export default Routes;
