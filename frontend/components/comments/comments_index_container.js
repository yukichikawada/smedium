import React from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../../actions/comments_action';
import CommentIndexItem from './comment_index_item';

const mapStateToProps = state => ({
  comments: Object.keys(state.entities.comments).map(id => state.entities.comments[id])
});

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem)
