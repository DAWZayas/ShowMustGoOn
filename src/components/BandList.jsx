import React, { Component } from 'react';

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
              bands.map( (band, index) => <li key={index}>{band.title}</li> )
            }
         </ul>
      </div>
    );
  }
}
