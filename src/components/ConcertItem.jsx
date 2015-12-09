import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ConcertItem extends Component {

  render() {
  	const { concert } = this.props;
    return (
    
    		<div className="container">
    			<div className="col-lg-6">
            	<Link to={`/concert/${concert.id}`}>{concert.title}</Link>    
         </div>
        </div>
    	
    );
  }

}

ConcertItem.propTypes = {
  concert: PropTypes.object.isRequired
};