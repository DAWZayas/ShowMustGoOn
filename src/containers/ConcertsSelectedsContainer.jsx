import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertsSelected from '../components/ConcertsSelected';




class ConcertsSelectedsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="panel panel-default">
            <ConcertsSelected { ...this.props }/>
          </div>
        </div>
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