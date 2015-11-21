import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandDetails from '../components/BandDetails';
import InfoList from '../components/InfoList';
import CommentList from '../components/CommentList';
import { addComment, removeComment } from '../actions';




class BandDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return (
      <div className="row">
        <div className="col-md-6">
    		  <div className="panel panel-default">
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
  const informations = Object.values(state.informations).filter( informations =>  informations.idBand === id );
  const comments =  Object.values(state.comments).filter( comment =>  comment.idBand === band.id);

  return { band, informations, comments };
}

function mapDispatchToProps(dispatch) {
  return {
  	onAddComment: (idBand, comment) => dispatch(addComment(idBand, comment)),
    onRemoveComment: (idComment) => dispatch(removeComment(idComment))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandDetailsContainer);