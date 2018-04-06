import { combineReducers } from 'redux';
import storiesReducer from './stories_reducer';

export default combineReducers({
  stories: storiesReducer
});
