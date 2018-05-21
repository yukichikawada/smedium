import React from 'react';
import { Link } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   fixed: 'top'
    // }
  }
  session() {
    let user = this.props.currentUser ? (
      <div></div>
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
      <NavLink href="/">Upgrade</NavLink>
    ) : (
      <NavLink href="/">About membership</NavLink>
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
      <div className="navbar-container">
        <Navbar color="light" light expand="md" className="fixed-top container">
          <Nav className="ml-auto" navbar>
            <NavItem>
              {this.upgrade()}
            </NavItem>
          </Nav>
          <NavbarBrand href="/">Smedium</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem><FontAwesomeIcon icon="search"/></NavItem>
            <NavItem><FontAwesomeIcon icon="bell"/></NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <FontAwesomeIcon icon="user"/>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem disabled>Become a member</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to="/newStory">New Story</Link></DropdownItem>
                <DropdownItem disabled>Your Stories</DropdownItem>
                <DropdownItem disabled>Stats</DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>Smedium Partner Program</DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>Bookmarks</DropdownItem>
                <DropdownItem disabled>Publications</DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>Profile</DropdownItem>
                <DropdownItem disabled>Settings</DropdownItem>
                <DropdownItem disabled>Help</DropdownItem>
                <DropdownItem disabled>Help</DropdownItem>
                <DropdownItem onClick={this.props.logout}>Sign out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
