import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewUser } from '../../actions/session_action';
import { closeModal } from '../../actions/modal_action';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(null, mapDispatchToProps)(Signup));
