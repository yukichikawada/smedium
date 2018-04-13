import React from 'react';
import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { createComment } from '../../actions/comments_action';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return { 
    currentUser: state.session.currentUser,
    storyId: parseInt(Object.keys(state.entities.stories)[0])
  }
};
// const mapStateToProps = (state, ownProps) => {
//   debugger
//   return { 
//     currentUser: state.session.currentUser,
//     storyId: ownProps.storyId
//   }
// };

// const mapStateToProps = (state, ownProps) => ({
//   currentUser: state.session.currentUser,
//   storyId: ownProps.storyId
// });

const mapDispatchToProps = dispatch => ({
  action: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
