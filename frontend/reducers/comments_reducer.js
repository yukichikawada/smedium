import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS
} from '../actions/comments_action';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT:
      return Object.assign({}, state, action.comment);
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.comments);
    default:
      return state;
  }
}

export default commentsReducer;
