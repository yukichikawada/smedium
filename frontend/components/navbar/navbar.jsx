import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  session() {
    let user = this.props.currentUser ? (
      <div>
        <Link to="/newStory" className="link-new-story">Write a Story</Link>
        <button onClick={this.props.logout} className="logout-button">
          Log out, { this.props.currentUser.username }
        </button>
      </div>
    ) : (
      <div className="login-signup-buttons">
        <Link to="/login" className="sign-in-button link-new-story button-link">Sign in</Link>
        <Link to="/signup" className="sign-up-button link-new-story button-link">Get started</Link>
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
          <p><Link to='/' className="heading-link">Smedium</Link></p>
          {this.session()}
        </div>
      </header>
    );
  }
}

export default Navbar;
