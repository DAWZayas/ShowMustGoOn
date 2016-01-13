import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertsSelected from '../components/ConcertsSelected';




class ConcertsSelectedsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
 
        <ConcertsSelected { ...this.props }/>

      </div>
    );
  } 
}

function mapStateToProps(state) {
  const fullinfo= state.informations;
  const fullbands= state.bands;

  return {fullinfo, fullbands};
}

function mapDispatchToProps() { 
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertsSelectedsContainer);