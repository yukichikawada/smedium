import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
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
  }

  session() {
    let user = this.props.currentUser ? (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/"><FontAwesomeIcon icon="search"/></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/"><FontAwesomeIcon icon="bell"/></NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>
            <FontAwesomeIcon icon="user"/>
          </DropdownToggle>
          <DropdownMenu right>
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
      <Button outline color="secondary" size="sm">Upgrade</Button>
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
          {this.session()}
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
