import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_action';
import Login from './login';


const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
