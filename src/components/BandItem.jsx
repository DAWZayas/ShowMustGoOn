import React, { Component } from 'react';
import { Link } from 'react-router';


export default class BandItem extends Component {

  render() {
  	const { band } = this.props;
    return (
    	<li>
    		<Link to={`/band/${band.id}`}>{band.title}</Link>   
    	</li>
    );
  }

}
