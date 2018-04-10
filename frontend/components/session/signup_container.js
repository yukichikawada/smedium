import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewUser, clearErrors } from '../../actions/session_action';
import Signup from './signup';

const mapStateToProps = ({ errors }) => ({
  errors
})

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
