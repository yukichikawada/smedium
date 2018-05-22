import React from 'react';
import { Link } from 'react-router-dom';

import MyNavLinks from './my_nav_links';

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
import Sticky from 'react-stickynode';

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
          <NavLink href="/"><FontAwesomeIcon icon={['far', 'bell']} /></NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>
            <FontAwesomeIcon icon={['far','user']}/>
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
            <DropdownItem onClick={this.props.logout} className="signout-button">
              Sign out
            </DropdownItem>
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
      <Button outline size="sm" className="upgrade">Upgrade</Button>
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
        <div className="nav-header container">
          <Navbar light expand="md">
            <Nav navbar>
              <NavItem>
                {this.upgrade()}
              </NavItem>
            </Nav>
            <NavbarBrand href="/" className="ml-auto title">Smedium</NavbarBrand>
            {this.session()}
          </Navbar>
        </div>
        <Sticky enabled={true}>
          <MyNavLinks></MyNavLinks>
        </Sticky>
      </div>
    );
  }
}

export default MyNavbar;
