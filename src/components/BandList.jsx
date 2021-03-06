import React, { Component, PropTypes } from 'react';
import BandItem from './BandItem';
import alertify from 'alertifyjs/build/alertify.min.js';

export default class BandList extends Component {
  constructor(props) {
    super(props);
    this.state={
      addDisabled: true
    };
  }


  handleAddButtonClick() {
    this.setState({
      editting: false
    });
    const { addBand, idConcert } = this.props;
    const node = this.refs.band;
    const title =  node.value.trim();
    if (title === ''){
      alertify.error('Missing input'); 
    }else{    
      addBand(title, idConcert);
    }
  }

  handleOnTitleKeyDownEdit(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleAddButtonClick();
    }
  }

  handleDisabledOkEdit(){
    const node = this.refs.band;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }

  render() {
    const { bands, auth } = this.props;

    return (
      <div className="panel container-fluid panel-default">
        <h3>Bands</h3>
        {
          bands.map( (band, index) =>  <BandItem key={index} band={band} {...this.props}/> )
        }<br/>
        <div className={auth.authenticated ?'input-group':'hidden'}>
          <input  type="text"  className="form-control" placeholder="Add bands" ref="band" onChange={e => this.handleDisabledOkEdit(e)} onKeyDown={(e) => this.handleOnTitleKeyDownEdit(e)}/>
          <span className="input-group-btn">
          <button disabled={this.state.addDisabled} className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
          </span>
        </div>
      </div>
      );
  }
}

BandList.propTypes = {
  auth: PropTypes.object.isRequired,
  addBand:PropTypes.func.isRequired,
  bands: PropTypes.array,
  idConcert: PropTypes.string.isRequired,
};

BandList.defaultProps = { 
  bands: []
};