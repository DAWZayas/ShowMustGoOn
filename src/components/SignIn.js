import React, { Component, PropTypes } from 'react';
import { Modal, ModalClose } from 'react-modal-bootstrap';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  handleCancelClick() {
    this.setState({ isOpen: false });
    this.props.cancelSignIn();
  }

  handlesignInWithGithubClick() {
    this.props.signInWithGithub();
  }

  handlesignInWithFacebookClick() {
    this.props.signInWithFacebook();
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Modal isOpen={isOpen} onRequestHide={() => this.handleCancelClick()} backdrop keyboard>
        <div className="modal-header">
          <ModalClose onClick={() => this.handleCancelClick()}/>
          <h4 className="modal-title">Sign in Dialog</h4>
        </div>
        <div className="modal-body">
          <button className="btn" type="button" onClick={ () => this.handlesignInWithGithubClick()}>GitHub</button>
          <button className="btn" type="button" onClick={ () => this.handlesignInWithFacebookClick()}>Facebook</button>
        </div>
      </Modal>
    );
  }

}

SignIn.propTypes = {
  cancelSignIn: PropTypes.func.isRequired,
  signInWithGithub: PropTypes.func.isRequired,
  signInWithFacebook: PropTypes.func.isRequired
};
