import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import InfoList from '../components/InfoList';
import CommentList from '../components/CommentList';
import Spinner from '../components/Spinner';


import * as infoActions from '../actions/information';
import * as commentsActions from '../actions/comments';




class BandDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading: true
    };
  }

  componentWillMount() {
    this.props.registerListeners();
    this.props.registerListenersBand();
    this.props.registerListenersComments();

  }

  componentWillReceiveProps() {

    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.props.unregisterListeners();
    this.props.unregisterListenersBand();
    this.props.unregisterListenersComments();
  }
  
  render() {
    return (
      <div>
      {this.state.loading? <Spinner /> : (
          <div>
             <InfoList { ...this.props } />
             <CommentList { ...this.props} />
          </div>
      )}
      </div>
    );
  } 
}

function mapStateToProps(state) {
  const idBand = state.router.params.id;
  const auth = state.auth;
  const comments =  state.comments.filter( comment =>  comment.band === idBand);
  const info = state.info.filter(i => idBand === i.band);
  const band = state.bands.filter(band => idBand===band.id)s


  return { idBand, info, comments, auth, band};
}


export default connect(
  mapStateToProps,
  Object.assign( {}, infoActions, commentsActions)
)(BandDetailsContainer);

BandDetailsContainer.propTypes = {
  registerListenersComments: PropTypes.func.isRequired,
  unregisterListenersComments: PropTypes.func.isRequired,
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired
};