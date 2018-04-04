import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = (preLoadedState = {}) => (
  createStore(
    RootReducer,
    preLoadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
