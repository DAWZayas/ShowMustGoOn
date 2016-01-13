import { connect } from 'react-redux';
import React, { Component } from 'react';
import ConcertList from '../components/ConcertList';
//import { pushState } from 'redux-router';
import { addConcert } from '../actions';


class ConcertListContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          
                      <h3>Preferences</h3>
                     <ConcertList { ...this.props } />
                
           
        </div>

    );
  } 
}

function mapStateToProps(state) {
  const fullinfo= state.informations;
  const fullbands= state.bands;
  const concerts= state.concerts;
  return { concerts, fullinfo, fullbands};
}

function mapActionsToProps(dispatch) {
  return {
    onAddConcert: (title) => dispatch(addConcert(title))
   // pushState: path => dispatch(pushState(null, path))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ConcertListContainer);