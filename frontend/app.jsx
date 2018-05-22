import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBell from '@fortawesome/fontawesome-free-regular/faBell';
import faBolt from '@fortawesome/fontawesome-free-solid/faBolt';
import faBookmark from '@fortawesome/fontawesome-free-regular/faBookmark';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

fontawesome.library.add(faBell, faBolt, faBookmark, faSearch, faStar, faUser);

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    delete window.currentUser;
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
