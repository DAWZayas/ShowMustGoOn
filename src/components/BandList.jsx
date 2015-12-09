import React, { Component, PropTypes } from 'react';
import BandItem from './BandItem';

export default class BandList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { bands } = this.props;

    return (
      <div className="container">
          <h3>Bands</h3>
          <ul className="col-lg-12 hero">
            {
              bands.map( (band, index) =>  <BandItem key={index} band={band} /> )
            }
         </ul>
         
      </div>
    );
  }
}

BandList.propTypes = {
  bands: PropTypes.array
};

BandList.defaultProps = { 
  bands: []
};