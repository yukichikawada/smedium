import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.closeModal());
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <h3>Log in</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <input type="submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

export default Login;
