import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ConcertItem extends Component {

constructor(props) {
    super(props);
   }

 handelOnclickRemove(id, title){
 	this.props.deleteConcert(id, title);
 }  

  render() {
  	const { concert, auth} = this.props;
    return (
    
    <li className="list-group-item action-element">	
       <Link to={`/concert/${concert.id}`}>{concert.title}</Link>
       <span className={ auth.id === 'github:15048506' ? 'pull-right glyphicon glyphicon-trash action-icon' : 'hidden'} onClick={() => this.handelOnclickRemove(concert.id, concert.title) } ></span>
    </li>   
    );
  }

}

ConcertItem.propTypes = {
  auth: PropTypes.object.isRequired,
  concert: PropTypes.object.isRequired
};