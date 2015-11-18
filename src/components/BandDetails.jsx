import React, { Component } from 'react';

export default class BandDetails extends Component {

  constructor(props) {
    super(props);
  }


  render() {
  	const { band } = this.props;
    return (
      <div className="panel-heading">
      	   <h3>
            <span>
              { band.title }
            </span>
          </h3>
      </div>
    );
  }
}