import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  display() {
    let user = this.props.currentUser ? (
      <div>
        <button onClick={this.props.logout}>Log out, { this.props.currentUser.username }</button>
      </div>
    ) : (
      <div className="login-signup-buttons">
        <a className="sign-in-button" onClick={() => this.props.openModal('login')}>Sign in</a>
        <a className="sign-up-button" onClick={() => this.props.openModal('signup')}>Get Started</a>
      </div>
    )

    return user;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.render();
    }
  }

  render() {
    return (
      <header>
        <div className="header-nav">
          <div className="header-upgrade"><button>Upgrade</button></div>
          <h1>Smedium</h1>
          {this.display()}
        </div>
      </header>
    );
  }
}

export default Navbar;
