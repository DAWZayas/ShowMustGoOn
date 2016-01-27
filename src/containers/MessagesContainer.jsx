import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Messages from '../components/Messages';
import * as messagesActions from '../actions/messages';




class messagesContainer extends Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.props.registerListeners();
    this.props.registerListenersUsers();
  }
  componentWillUnmount() {
    this.props.unregisterListeners();
    this.props.unregisterListenersUsers();
  }

  render() {
    return (
      <div>
 
        <Messages { ...this.props }/>

      </div>
    );
  } 
}

function mapStateToProps(state) {
  const auth=state.auth;
  const messages= state.messages || {};
  const users= state.users;
  return {messages, auth, users};
}


export default connect(
  mapStateToProps,
  messagesActions
)(messagesContainer);

messagesContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
};