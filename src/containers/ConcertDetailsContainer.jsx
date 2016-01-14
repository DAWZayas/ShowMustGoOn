import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConcertDetails from '../components/ConcertDetails';
import BandList from '../components/BandList';
import * as bandsActions from '../actions/bands';



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
  const bands = state.bands;
  

  return { concert, bands, idConcert };
}


export default connect(
  mapStateToProps,
  bandsActions
)(ConcertDetailsContainer);