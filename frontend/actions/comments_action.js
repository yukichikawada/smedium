import { postComment } from '../utils/comments_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const createComment = comment => dispatch => (
  postComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const fetchComment = commentId => dispatch => (
  fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
);

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = () => dispatch => (
  fetchComments().then(comments => dispatch(receiveComments(comments)))
);
