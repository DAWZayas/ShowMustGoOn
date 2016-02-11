import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Messages from '../components/Messages';
import * as messagesActions from '../actions/messages';
import Spinner from '../components/Spinner';




class messagesContainer extends Component {

  constructor(props) {
    super(props);
    this.state={
      loading: true
    };
  }


  componentWillMount() {
    this.props.registerListeners();
    this.props.registerListenersUsers();
  }
  componentWillReceiveProps() {

    this.setState({ loading: false});
  }


  render() {
    return (
      <div>
 
        {this.state.loading?<Spinner /> : (<Messages { ...this.props }/>)}

      </div>
    );
  } 
}

function mapStateToProps(state) {
  const auth=state.auth;
  const messages= state.messages || {};
  const users= state.users;
  const news = state.messages.map( (user) => {if(user.recived!==undefined){return Object.keys(user.recived).map( (key) => {if(user.recived[key].read===false){return user.id}})}else{return [];}});
  let newmsg = [];
  for (var i = news.length - 1; i >= 0; i--) {
    newmsg = newmsg.concat(news[i]);
  }


  return {messages, auth, users, newmsg};
}


export default connect(
  mapStateToProps,
  messagesActions
)(messagesContainer);

messagesContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
};