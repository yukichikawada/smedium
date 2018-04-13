import React from 'react';
import ReactQuill from 'react-quill';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.currentUser.id,
      story_id: this.props.storyId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.setState({body: ''});
  }

  handleChange(value) {
    this.setState({body: value});
  }

  render() {
    return (
      <div className="comment-form-container">
        <form onSubmit={this.handleSubmit}>
          <ReactQuill
            value={this.state.body}
            placeholder="Be nice..."
            className="quill-body"
            onChange={this.handleChange} />

          <div className="submit-container">
            <div className="submit-left"></div>
            <input
              type="submit"
              className="comment-submit"
              value="Add Comment" />
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm;
