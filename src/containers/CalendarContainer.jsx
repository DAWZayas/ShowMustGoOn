import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Calend from '../components/Calend';
import * as infoActions from '../actions/information';

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.registerListeners();
    this.props.registerListenersBand();
  }
  componentWillUnmount() {
    this.props.unregisterListeners();
    this.props.unregisterListenersBand();
  }
  
  render() {
    return (
      <div>
        <Calend { ...this.props} />
      </div>
    );
  } 
}

/*function mapStateToProps(state) {
  return {
  	info: state.info
  };
}/*
function mapActionsToProps(dispatch) {
  return {
  	dispatch
  };
}*/

export default connect(
	state => ({ info: state.info, bands: state.bands}),
	infoActions
)(CalendarContainer);

CalendarContainer.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
  registerListenersBand: PropTypes.func.isRequired,
  unregisterListenersBand: PropTypes.func.isRequired
};