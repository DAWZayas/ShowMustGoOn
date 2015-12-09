import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConcertDetails from '../components/ConcertDetails';
import BandList from '../components/BandList';
import ConcertsSelected from '../components/ConcertsSelected';



class ConcertDetailsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  	return (
      <div className="row">
        <div className="col-md-6">
          <div className="selected">
            <ConcertsSelected { ...this.props }/>
          </div>
    		  <div className="panel panel-default">
      			 <ConcertDetails { ...this.props } />
             <BandList {...this.props}/>
    		  </div>
        </div>
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

  return { concert, bands, fullinfo, fullbands };
}

function mapDispatchToProps(dispatch) {
  return {
  	onAddConcertClick: (idConcert, title) => dispatch(addConcert(idConcert, title)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertDetailsContainer);