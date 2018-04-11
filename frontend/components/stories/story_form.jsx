import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleChange(value) {
    this.setState({body: value});
  }

  componentWillUnmount() {
    this.props.clearStoryErrors();
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <div className="container">
        <p className="partner-program">Learn about joining our Partner Program</p>
        <hr></hr>
        <div className="content">
          <ul>{this.errors()}</ul>
          <h3>{this.props.formType}</h3>
          <form onSubmit={this.handleSubmit} className="story-form">


            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              className="story-form-content story-form-title"
              onChange={this.update('title')} />


            <ReactQuill
              value={this.state.body}
              className="story-form-content story-form-body"
              placeholder="Tell your story..."
              onChange={this.handleChange} />

            <div className="submit-position story-form-content">
              <div className="submit-left"></div>
              <input
                type="submit"
                value="Publish"
                className="story-form-submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(StoryForm);
