import React from 'react';
import { Link } from 'react-router-dom';

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
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  closeModal() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="modal-background" onClick={() => this.closeModal()}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
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
                    <input className="form-submit" type="submit" value="Sign in" />
                  </label>
                </div>
              </form>
              <p className="login-signup-link">No account? <Link to={"/signup"} className="switch-modal">Create one</Link>.</p>
              <p className="terms-of-service login-signup-link">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
