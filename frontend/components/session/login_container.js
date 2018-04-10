import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_action';
import Login from './login';

const mapStateToProps = ({ errors }) => ({
  errors
})

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
