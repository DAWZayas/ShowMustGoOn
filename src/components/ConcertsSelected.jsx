import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class ConcertsSelected extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { selecteds } = this.props;

    return (
     
      <div className="panel panel-default container-fluid">
        <div>
        <h3>Concerts Selected</h3>
        </div>
          {selecteds.length===0? <li>none</li> :
            selecteds.map( (concert, index) =>  <Link key={index} className="list-group-item action-element" to={`users/${concert.id}`}><p className="pull-left">Band:  {concert.bandName}</p><p className="pull-right">Place:  {concert.title}</p><p>Date:  {concert.date}</p></Link>)
          }
      </div>
    );
  }
}

ConcertsSelected.propTypes = {
  selecteds: PropTypes.array,
};

