import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ConcertsSelected from '../components/ConcertsSelected';
import * as selectedsActions from '../actions/selecteds';
import Spinner from '../components/Spinner';

class ConcertsSelectedsContainer extends Component {

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
        {this.state.loading?<Spinner /> : ( <ConcertsSelected {...this.props}/>) } 
      </div>
    );
  } 
}

function mapStateToProps(state) {
  const idUser=state.auth.id;
  const selecteds= state.info.filter(i => i.users[idUser]? i.users[idUser].assist? true : false : false) || {};
  return {selecteds};
}

export default connect(
  mapStateToProps,
  selectedsActions
)(ConcertsSelectedsContainer);

ConcertsSelectedsContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
};