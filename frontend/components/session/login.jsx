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
      <div className="login-container">
        <div className="login-content">
          <h3 className="login-welcome">Welcome back.</h3>
          <p className="login-p">
            Sign in to access your personalized homepage, follow authors and topics you love, and like stories that matter to you.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="login-form">
              <label>
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')} />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')} />
              </label>
              <label>
                <input type="submit" value="Sign in" />
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
