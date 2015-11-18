import React, { Component } from 'react';

export default class InfoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { informations } = this.props;
    return (
      <div className="container">
          <h3>Information</h3>
          <ul className="col-lg-12 hero">
            {
            informations.map( (information, index) => <li key={index}>{information.title}</li> )
            }
         </ul>
      </div>
    );
  }
}
