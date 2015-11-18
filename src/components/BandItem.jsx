import React, { Component } from 'react';
import { Link } from 'react-router';


export default class BandItem extends Component {

  render() {
  	const { band } = this.props;
    return (
    	<li>
    		<div className="container">
    			<div className="col-lg-6">
            	<Link to={`/band/${band.id}`}>{band.title}</Link>    
         </div>
        </div>
    	</li>
    );
  }

}
