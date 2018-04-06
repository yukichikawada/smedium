import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewUser } from '../../actions/session_action';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default withRouter(connect(null, mapDispatchToProps)(Signup));
