import React from 'react';
import { connect } from 'react-redux'
import Navbar from './navbar';

import { logout } from '../../actions/session_action';
import { openModal } from '../../actions/modal_action';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
