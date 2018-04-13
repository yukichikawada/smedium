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
      <div>
        <form onSubmit={this.handleSubmit}>
          <ReactQuill
            value={this.state.body}
            placeholder="Be nice..."
            onChange={this.handleChange} />

          <input
            type="submit"
            value="Add Comment" />
        </form>
      </div>
    )
  }
}

export default CommentForm;
