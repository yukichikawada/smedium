import React from 'react';
import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { createComment } from '../../actions/comments_action';

const mapDispatchToProps = dispatch => ({
  action: comment => dispatch(createComment(comment))
});

export default connect(null, mapDispatchToProps)(CommentForm);
