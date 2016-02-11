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
            selecteds.map( (concert, index) =>  <Link key={index} className="list-group-item action-element" to={`users/${concert.id}`}><p className="pull-right"><b>Band:</b>  {concert.bandName}</p><p className="pull-left"><b>Place:</b>  {concert.title}</p><p className="text-center"><b>Date:</b>  {concert.date}</p></Link>)
          }
      </div>
    );
  }
}

ConcertsSelected.propTypes = {
  selecteds: PropTypes.array,
};

