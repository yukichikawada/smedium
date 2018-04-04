import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Index from './index';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Index store={store} />
    </HashRouter>
  </Provider>
);

export default Root;
