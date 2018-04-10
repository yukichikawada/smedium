import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_action';
import { RECEIVE_STORY_ERRORS, CLEAR_STORY_ERRORS } from '../actions/stories_action';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return [...action.errors];
    case RECEIVE_STORY_ERRORS:
      return [...action.errors];
    case CLEAR_SESSION_ERRORS:
      return [];
    case CLEAR_STORY_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
