import React, { Component, PropTypes } from 'react';
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
            selecteds.map( (concert, index) =>  <li key={index}><h7>{concert.bandName} {concert.title}</h7></li> )
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

