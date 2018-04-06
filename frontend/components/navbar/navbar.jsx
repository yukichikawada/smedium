import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  session() {
    let user = this.props.currentUser ? (
      <div>
        <button onClick={this.props.logout}>Log out, { this.props.currentUser.username }</button>
      </div>
    ) : (
      <div className="login-signup-buttons">
        <a className="sign-in-button button-link" onClick={() => this.props.openModal('login')}>Sign in</a>
        <a className="sign-up-button button-link" onClick={() => this.props.openModal('signup')}>Get started</a>
      </div>
    )

    return user;
  }

  upgrade() {
    let plan = this.props.currentUser ? (
      <div>
        <a className="upgrade-button button-link">Upgrade</a>
      </div>
    ) : (
      <div>
        <a className="upgrade-button button-link">About membership</a>
      </div>
    )

    return plan;
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
          {this.upgrade()}
          <p>Smedium</p>
          {this.session()}
        </div>
      </header>
    );
  }
}

export default Navbar;
