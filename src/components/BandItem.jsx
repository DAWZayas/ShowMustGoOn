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

    const { band } = this.props;
    return (
        <Link to={`/band/${band.id}`}{...this.props} className="list-group-item action-element">{band.title}</Link>  
    );
  }

}

BandItem.propTypes = {
  band: PropTypes.object.isRequired
};