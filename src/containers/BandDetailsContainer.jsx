import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoList from '../components/InfoList';
import CommentList from '../components/CommentList';


import * as infoActions from '../actions/information';
import * as commentsActions from '../actions/comments';



class BandDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.registerListeners();
    this.props.registerListenersComments();
  }
  componentWillUnmount() {
    this.props.unregisterListeners();
    this.props.unregisterListenersComments();
  }
  
  render() {
    return (
      <div>
           <InfoList { ...this.props } />
           <CommentList { ...this.props} />
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
  const bandTitle = state.history.title;
  const comments =  state.comments.filter( comment =>  comment.band === idBand);
  const info = state.info.filter(i => idBand === i.band);


  return { idBand, info, comments, bandTitle};
}


export default connect(
  mapStateToProps,
  Object.assign( {}, infoActions, commentsActions)
)(BandDetailsContainer);