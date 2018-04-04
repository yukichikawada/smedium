import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignupContainer from './session/signup_container';
import NavbarContainer from './navbar/navbar_container';

const Index = () => (
  <div>
    <h1>hi mom and dad</h1>
    <Switch>
      <Route exact path="/signup" component={SignupContainer} />
      <Route path="/" component={NavbarContainer} />
    </Switch>
  </div>
);

export default Index;
