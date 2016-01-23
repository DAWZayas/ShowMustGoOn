import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as usersActions from '../actions/users';




class ProfileContainer extends Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.props.registerListeners();
  }
  componentWillUnmount() {
    this.props.unregisterListeners();
  }

  render() {
    return (
      <div>
 
        <Profile { ...this.props }/>

      </div>
    );
  } 
}

function mapStateToProps(state) {
  const auth=state.auth;
  const idUser=state.auth.id;
  const user= state.users.filter(user => user.id === idUser) || {};
  return {user, auth};
}


export default connect(
  mapStateToProps,
  usersActions
)(ProfileContainer);

ProfileContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
};