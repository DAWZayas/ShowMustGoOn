import React, { Component, PropTypes } from 'react';
import BandItem from './BandItem';

export default class BandList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { bands } = this.props;

    return (
      <div className="container">
          <h3>Bands</h3>
          <ul className="col-lg-12 hero">
            {
              bands.map( (band, index) =>  <BandItem key={index} band={band} /> )
            }
         </ul>
         <div className="input-group">
            <input  type="text"  className="form-control" placeholder="Add bands" ref="band" />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
          </div>
         
      </div>
    );
  }
}

BandList.propTypes = {
  bands: PropTypes.array,
  idConcert: PropTypes.string.isRequired,
};

BandList.defaultProps = { 
  bands: []
};