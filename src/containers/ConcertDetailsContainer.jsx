import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConcertDetails from '../components/ConcertDetails';
import BandList from '../components/BandList';
import { addBand } from '../actions';



class ConcertDetailsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
             <ConcertDetails { ...this.props } />
             <BandList {...this.props}/>
      </div>
    );
  } 
}

function mapStateToProps(state) {
  const idConcert = state.router.params.idConcert;
  const concert = state.concerts.filter( concert => idConcert === concert.id)[0] || {};
  const bands = Object.values(state.bands).filter( band =>  band.idConcert === concert.id );
  const fullinfo= state.informations;
  const fullbands= state.bands;

  return { concert, bands, fullinfo, fullbands, idConcert };
}

function mapDispatchToProps(dispatch) { 
  return {
        onAddBand: (title, idConcert) => dispatch(addBand(title, idConcert))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertDetailsContainer);