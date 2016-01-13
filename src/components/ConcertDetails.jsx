import React, { Component, PropTypes } from 'react';

export default class ConcertDetails extends Component {

  constructor(props) {
    super(props);
  }


  render() {
  	const { concert } = this.props;
    return (

      	   <h3>                         
             -  { concert.title }
            </h3>

    );
  }
}

ConcertDetails.propTypes = {
  concert: PropTypes.object.isRequired
 };