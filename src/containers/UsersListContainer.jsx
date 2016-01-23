import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList';
import * as usersActions from '../actions/users';




class UsersListContainer extends Component {

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
 
        <UserList { ...this.props }/>

      </div>
    );
  } 
}

function mapStateToProps(state) {
  const idInfo = state.router.params.id;
  const auth=state.auth;
  const idUser=state.auth.id;
  const users= state.users.filter(user => user.info[idInfo].assist === true) || {};
  return {users, auth, idInfo};
}


export default connect(
  mapStateToProps,
  usersActions
)(UsersListContainer);

UsersListContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
};