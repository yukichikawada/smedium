import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_action';
import Login from './login';

const mapStateToProps = ({ errors }) => ({
  errors
})

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
