import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_action';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formuser => dispatch(createNewUser(formuser)),
});

export default connect(null, mapDispatchToProps)(Signup);
