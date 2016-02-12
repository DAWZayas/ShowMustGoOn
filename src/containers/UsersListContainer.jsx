import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList';
import * as usersActions from '../actions/users';
import Spinner from '../components/Spinner';





class UsersListContainer extends Component {

  constructor(props) {
    super(props);
    this.state={
      loading: true
    };
  }


  componentWillMount() {
    this.props.registerListeners();
  }

  componentWillReceiveProps() {

    this.setState({ loading: false});
  }

  componentWillUnmount() {
    this.props.unregisterListeners();
  }

  render() {
    return (
      <div>
 
        {this.state.loading?<Spinner /> : (<UserList { ...this.props }/>)}

      </div>
    );
  } 
}

function mapStateToProps(state) {
  const idInfo = state.router.params.id;
  const auth=state.auth;
  const idUser=state.auth.id;
  const users= state.users.filter(user => {if(user.info!==undefined&&user.id!==idUser&&user.info[idInfo]!==undefined&&user.info[idInfo].assist === true){return true;}else{return false;}}) || {};
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