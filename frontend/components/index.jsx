import React from 'react';
import { Route } from 'react-router-dom';

import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import NavbarContainer from './navbar/navbar_container';
{/*import { AuthRoute, ProtectedRoute } from '../utils/route_util'; */}

const Index = () => (
  <div>
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/" component={NavbarContainer} />
  </div>
);

export default Index;
