import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as messagesActions from '../actions/messages';
import Notifications from '../components/Notifications';



class NotificationsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.registerListeners();
   
  }


  
  render() {
    return (
      <Notifications {...this.props} />
    );
  } 
}



function mapStateToProps(state) {
  
  const received = state.messages.reduce( (sum, user) => sum + Object.keys(user.recived).filter( (key) => user.recived[key].read === false).length, 0);


  return {
    
    total: received
  };
}


export default connect(
  mapStateToProps,
  messagesActions
)(NotificationsContainer);

NotificationsContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
};