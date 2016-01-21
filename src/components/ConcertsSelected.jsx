import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class ConcertsSelected extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { selecteds } = this.props;

    return (
     
      <div>
        <div>
        <h3>Concerts Selected</h3>
        </div>
        <ul className="col-lg-12 hero">
          {selecteds.length===0? <li>none</li> :
            selecteds.map( (concert, index) =>  <Link key={index} className="list-group-item action-element" to={`/band/${concert.band}`}><p className="pull-left">Band: {concert.bandName}</p><p className="pull-right">Place:{concert.title}</p><p>Date:{concert.date}</p></Link>)
          }
         </ul>
      </div>
    );
  }
}

ConcertsSelected.propTypes = {
  fullinfo: PropTypes.array,
  fullbands: PropTypes.array
};

