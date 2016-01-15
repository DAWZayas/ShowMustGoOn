import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandDetails from '../components/BandDetails';
import InfoList from '../components/InfoList';
import CommentList from '../components/CommentList';


import * as infoActions from '../actions/information';



class BandDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
           <BandDetails { ...this.props } />
           <InfoList { ...this.props } />
           <CommentList { ...this.props} />
          </div>
        </div>
      </div>
    );
  } 
}

function mapStateToProps(state) {
  let band = {};
  const id = state.router.params.id;
  for (var i = state.bands.length - 1; i >= 0; i--) {
    if (state.bands[i].id === id){band = state.bands[i];}
  }
  const informations = state.informations;
  const comments =  Object.values(state.comments).filter( comment =>  comment.idBand === band.id);
  const fullinfo= state.informations;
  const fullbands= state.bands;


  return { band, informations, comments, fullinfo, fullbands};
}


export default connect(
  mapStateToProps,
  infoActions
)(BandDetailsContainer);