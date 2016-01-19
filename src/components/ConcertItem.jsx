import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ConcertItem extends Component {

  render() {
  	const { concert } = this.props;
    return (
    
    
       <a href={`/concert/${concert.id}`}  className="list-group-item action-element">{concert.title}</a>
    );
  }

}

ConcertItem.propTypes = {
  concert: PropTypes.object.isRequired
};