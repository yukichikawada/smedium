import { RECEIVE_STORY, RECEIVE_STORIES, REMOVE_STORY } from '../actions/stories_action';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STORY:
      return Object.assign({}, state, {[action.story.id]: action.story});
    case RECEIVE_STORIES:
      return Object.assign({}, action.stories);
    case REMOVE_STORY:
      let newState = Object.assign({}, state);
      delete newState[action.storyId];
      return newState;
    default:
      return state;
  }
};
