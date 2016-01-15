import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class BandItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPositive: 0,
      isNegative: 0
      
    };
   }

   handlePositive(){
    let cont=this.state.isPositive + 1;
    this.setState({
      isPositive: cont
    });
   }

    handleNegative(){
    let cont=this.state.isNegative + 1;
    this.setState({
      isNegative: cont
    });
   }

  render() {
  //  const { setHistory } = this.props;
    const { band } = this.props;
    return (
      <li >
        <div>
        <Link to={`/band/${band.id}`} /*onClick={ setHistory(band.title) }*/>{band.title}</Link>  
        <button className=" btn btn-success glyphicon glyphicon-thumbs-up pull-right" onClick={() => this.handlePositive()}>({this.state.isPositive})</button>
        <button className=" btn btn-danger glyphicon glyphicon-thumbs-down pull-right" onClick={() => this.handleNegative()}>({this.state.isNegative})</button>
        </div>
         <br/>
          <br/>
      </li>
    );
  }

}

BandItem.propTypes = {
  band: PropTypes.object.isRequired
};