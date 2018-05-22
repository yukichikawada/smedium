import React from 'react';

import CommentsIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const comments = this.props.comments.map(comment => {
      return (
        <CommentsIndexItem key={comment.id} comment={comment} />
      )
    })
    return (
      <section>
        {comments}
      </section>
    )
  }
}

export default CommentsIndex;
