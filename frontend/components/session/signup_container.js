import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_action';
import { closeModal } from '../../actions/modal_action';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(Signup);
