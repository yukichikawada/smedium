import React from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginContainer />;
      break;
    case 'signup':
      component = <SignupContainer />;
      break;
    default:
      return null;
  }

  return (
    <div onClick={closeModal}>
      <div onClick={e => e.stopPropagation}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
