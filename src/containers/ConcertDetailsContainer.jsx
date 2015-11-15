import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConcertDetails from '../components/ConcertDetails';
import PlaceList from '../components/PlaceList';

import { addPlace } from '../actions';

class ConcertDetailsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  	return (
      <div className="row">
        <div className="col-md-6">
    		  <div className="panel panel-default">
    			 <ConcertDetails { ...this.props } />
    			 <PlaceList { ...this.props }/>
    		  </div>
        </div>
      </div>
  	);
  }	
}

function mapStateToProps(state) {
  const idConcert = state.router.params.idConcert;
  const concert = state.concerts.filter( concert => idConcert === concert.id)[0] || {};
  const places = Object.values(state.places).filter( place =>  place.idConcert === concert.id );
  return { concert, places };
}

function mapDispatchToProps(dispatch) {
  return {
  	onAddPlaceClick: (idConcert, title) => dispatch(addPlace(idConcert, title)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertDetailsContainer);