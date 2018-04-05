import React from 'react';
import { Route } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import About from './about';
import Slices from './slices';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const Index = () => (
  <div>
    <Route path="/" component={NavbarContainer} />
    {/*<Route path="/" component={Slices} />*/}
    {/*<ProtectedRoute path="/about" component={About} />*/}
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default Index;
