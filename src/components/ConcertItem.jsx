import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ConcertItem extends Component {

  render() {
  	const { concert } = this.props;
    return (
    
    
       <Link to={`/concert/${concert.id}`}  className="list-group-item action-element">{concert.title}</Link>
    );
  }

}

ConcertItem.propTypes = {
  concert: PropTypes.object.isRequired
};