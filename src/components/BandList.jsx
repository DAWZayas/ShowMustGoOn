import React, { Component, PropTypes } from 'react';
import BandItem from './BandItem';

export default class BandList extends Component {
  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
  this.setState({
    editting: false
  });
  const { addBand, idConcert } = this.props;
  const node = this.refs.band;
  const title =  node.value.trim();
  if (title === ''){
    alert('Missing input'); 
  }else{    
    addBand(title, idConcert);
  }
}


  render() {
    const { bands, auth } = this.props;

    return (
      <div className="container-fluid">
          <h3>Bands</h3>
            {
              bands.map( (band, index) =>  <BandItem key={index} band={band} {...this.props}/> )
            }
            <br/>
         <div className={auth.authenticated ?'input-group':'hidden'}>
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