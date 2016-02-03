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
  }
  componentWillUnmount() {
    this.props.unregisterListeners();
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
	state => ({ info: state.info}),
	infoActions
)(CalendarContainer);