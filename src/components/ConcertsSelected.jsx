import React, { Component, PropTypes } from 'react';
export default class ConcertsSelected extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let selecteds=[];
    let band;
    const { fullinfo, fullbands } = this.props;
    for (var i = fullinfo.length - 1; i >= 0; i--) {
      if (fullinfo[i].asistir){
        for (var y = fullbands.length - 1; y >= 0; y--) {
          if(fullbands[y].id===fullinfo[i].idBand){
            band = fullbands[y].title;
            selecteds.push({band: band, place: fullinfo[i].title});
          }
        };
      }
    };

    return (
      <div className="container">
        <h3>Concerts Selected</h3>
        <ul className="col-lg-12 hero">
          {
            selecteds.map( (concert, index) =>  <li key={index}>{concert.band} {concert.place}</li> )
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

