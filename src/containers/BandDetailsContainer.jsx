import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoList from '../components/InfoList';
import CommentList from '../components/CommentList';


import * as infoActions from '../actions/information';



class BandDetailsContainer extends Component {
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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
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
  const idBand = state.router.params.id;
 /* for (var i = state.bands.length - 1; i >= 0; i--) {
    if (state.bands[i].id === id){band = state.bands[i];}
  }*/

  const comments =  Object.values(state.comments).filter( comment =>  comment.idBand === band.id);
  const info = state.info.filter(i => idBand === i.band);


  return { idBand, info, comments};
}


export default connect(
  mapStateToProps,
  infoActions
)(BandDetailsContainer);