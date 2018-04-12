import React from 'react';
import ReactQuill from 'react-quill';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.state.body = '')
      .then(() => this.props.fetchComments());
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
