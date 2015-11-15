import React, { Component } from 'react';

export default class PlaceList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { places } = this.props;

    return (
      <div className="container">
          <h3>Bands</h3>
          <ul className="col-lg-12 hero">
            {
              places.map( (place, index) => <li key={index}>{place.title}</li> )
            }
         </ul>
      </div>
    );
  }
}
