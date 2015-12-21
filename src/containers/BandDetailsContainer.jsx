import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandDetails from '../components/BandDetails';
import InfoList from '../components/InfoList';
import CommentList from '../components/CommentList';
import { addComment, removeComment, editComment, addInfo } from '../actions';




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
  const fullinfo= state.informations;
  const fullbands= state.bands;


  return { band, informations, comments, fullinfo, fullbands};
}

function mapDispatchToProps(dispatch) {
  return {
    onAddInfo: (title, date, price, id) => dispatch(addInfo(title, date, price, id)),
    onSelectedConcert: (index) => dispatch(selectedConcert(index)),
    onAddComment: (idBand, comment) => dispatch(addComment(idBand, comment)),
    onRemoveComment: (idComment) => dispatch(removeComment(idComment)),
    onEditComment: (idComment, newComment) => dispatch(editComment(idComment, newComment))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandDetailsContainer);