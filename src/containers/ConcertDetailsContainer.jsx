import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandList from '../components/BandList';
import * as bandsActions from '../actions/bands';
import setHistory from '../actions/history';



class ConcertDetailsContainer extends Component {

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
      <div className="row">
             <BandList {...this.props}/>
      </div>
    );
  } 
}

function mapStateToProps(state) {
  const idConcert = state.router.params.idConcert;
  const concert = state.concerts.filter( concert => idConcert === concert.id)[0] || {};
  const bands = state.bands.filter(band => idConcert === band.concert);
  

  return { concert, bands, idConcert };
}


export default connect(
  mapStateToProps,
   Object.assign( {}, bandsActions, { setHistory } )
)(ConcertDetailsContainer);
