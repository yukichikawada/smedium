import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form">
        <h3>Sign up</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <label>Email:
            <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')} />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type="submit" value="Sign up" />
        </form>
      </div>
    );
  }
};

export default Signup;
