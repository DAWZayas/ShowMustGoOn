import React, { Component, PropTypes } from 'react';

export default class BandDetails extends Component {

  constructor(props) {
    super(props);
  }


  render() {
  	const {band} = this.props;
    return (
      <div>
      	   <h3>
              { band.title }
          </h3>
      </div>
    );
  }
}

BandDetails.propTypes = {
  band: PropTypes.object.isRequired
  
 };
