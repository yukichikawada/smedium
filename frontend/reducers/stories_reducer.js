import {
  RECEIVE_STORY,
  RECEIVE_STORIES,
  REMOVE_STORY,
  RECEIVE_STORY_ERRORS,
  CLEAR_STORY_ERRORS
} from '../actions/stories_action';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STORY:
      return Object.assign({}, {[action.story.id]: action.story});
    case RECEIVE_STORIES:
      return Object.assign({}, action.stories);
    case REMOVE_STORY:
      let newState = Object.assign({}, state);
      delete newState[action.storyId];
      return newState;
    case RECEIVE_STORY_ERRORS:
      return Object.assign({}, state, action.errors);
    case CLEAR_STORY_ERRORS:
      let errorlessState = Object.assign({}, state);
      debugger
      delete errorlessState[errors];
      return errorlessState;
    default:
      return state;
  }
};
