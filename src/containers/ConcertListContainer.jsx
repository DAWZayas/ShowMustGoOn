import { connect } from 'react-redux';
import React, { Component } from 'react';
import ConcertList from '../components/ConcertList';
import { pushState } from 'redux-router';
import ConcertsSelected from '../components/ConcertsSelected';


class ConcertListContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  	return (
      <div className="row">
        <div className="col-md-6">
          <div className="selectedinband">
            <ConcertsSelected { ...this.props }/>
          </div>
		  <div className="panel panel-default">
			 <ConcertList { ...this.props } />
		  </div>
        </div>
      </div>
  	);
  }	
}

function mapStateToProps(state) {
  const fullinfo= state.informations;
  const fullbands= state.bands;
  const concerts= state.concerts;
  return { concerts, fullinfo, fullbands};
}

function mapActionsToProps(dispatch) {
  return {
  
    pushState: path => dispatch(pushState(null, path))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ConcertListContainer);