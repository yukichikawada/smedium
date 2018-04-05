import React from 'react';
import { Route } from 'react-router-dom';

import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
{/*import { AuthRoute, ProtectedRoute } from '../utils/route_util'; */}

const Index = () => (
  <div>
    <Modal />
    <Route path="/" component={NavbarContainer} />
  </div>
);

export default Index;
