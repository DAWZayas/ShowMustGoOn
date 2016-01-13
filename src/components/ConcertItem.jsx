import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ConcertItem extends Component {

  render() {
  	const { concert } = this.props;
    return (
    
    		<div>
    			<div className="col-lg-12">
            	<h4><li><Link to={`/concert/${concert.id}`}>{concert.title}</Link></li></h4>
         </div>
        </div>
    	
    );
  }

}

ConcertItem.propTypes = {
  concert: PropTypes.object.isRequired
};