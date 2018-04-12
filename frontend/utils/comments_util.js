export const postComment = comment => (
  $.ajax({
    url: 'api/comments',
    method: 'POST',
    data: { comment }
  })
);

export const fetchComments = () => (
  $.ajax({
    url: 'api/comments',
    method: 'GET',
  })
);

export const fetchComment = commentId => (
  $.ajax({
    url: `api/comments/${commentId}`,
    method: 'GET'
  })
);
