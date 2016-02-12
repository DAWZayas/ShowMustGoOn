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
            selecteds.map( (concert, index) =>  <Link key={index} className="list-group-item action-element" to={`users/${concert.id}`}><p className="left"><b>Band:</b>  {concert.bandName}</p><p className="right"><b>Place:</b>  {concert.title}</p><p className="mid"><b>Date:</b> {new Date(concert.date).getDate()}/{new Date(concert.date).getMonth()+1}/{new Date(concert.date).getFullYear()}</p></Link>)
          }
      </div>
    );
  }
}

ConcertsSelected.propTypes = {
  selecteds: PropTypes.array,
};

