import React from 'react';
import { Link } from 'react-router-dom';

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
      .then(() => this.props.closeModal)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <h3 className="login-welcome">Join Smedium.</h3>
          <p className="login-p">
            Create an account to personalize your homepage, follow your favorite authors and publications, priase stories you love, and more.
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
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')} />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')} />
              </label>
              <label>
                <input className="form-submit" type="submit" value="Sign up" />
              </label>
            </div>
          </form>
          <p className="login-signup-link">Already have an account? <Link to={"/login"} className="switch-modal">Sign in</Link>.</p>
          <p className="terms-of-service login-signup-link">Terms of Service</p>
        </div>
      </div>
    );
  }
};

export default Signup;
