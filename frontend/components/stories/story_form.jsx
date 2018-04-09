import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
      console.log(this.state);
    };
  }

  render() {
    return (
      <div className="container">
        <p className="partner-program">Learn about joining our Partner Program</p>
        <hr></hr>
        <div className="content">
          <h3>{this.props.formType}</h3>
          <form onSubmit={this.handleSubmit} className="story-form">


            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              className="story-form-content story-form-title"
              onChange={this.update('title')} />


            <textarea
              value={this.state.body}
              className="story-form-content story-form-body"
              placeholder="Tell your story..."
              onChange={this.update('body')} />

            <input
              type="submit"
              value="Publish"
              className="story-form-submit story-form-item" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(StoryForm);
