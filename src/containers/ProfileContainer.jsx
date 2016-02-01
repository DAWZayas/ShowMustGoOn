import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as usersActions from '../actions/users';
import Spinner from '../components/Spinner';





class ProfileContainer extends Component {

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
 
        {this.state.loading?<Spinner /> : (<Profile { ...this.props }/>)}
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
}