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
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.update('title')} />
          </label>
          <label>
            <textarea
              value={this.state.body}
              onChange={this.update('body')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(StoryForm);
