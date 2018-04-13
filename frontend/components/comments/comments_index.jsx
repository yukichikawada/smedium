import React from 'react';

import StoriesIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const comments = this.props.comments.map(comment => {
      return (
        <StoriesIndexItem key={comment.id} comment={comment} />
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
