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

   handelOnclickRemove(id, title){
    this.props.deleteBand(id, title);
   }


  render() {

    const { band, auth } = this.props;
    return (
        <li className="list-group-item action-element">
          <Link  to={`/band/${band.id}`}{...this.props}>{band.title}</Link>   
          <span className={auth.authenticated ? 'pull-right glyphicon glyphicon-trash action-icon' : 'hidden'} onClick={() => this.handelOnclickRemove(band.id, band.title) }></span>
        </li>
 
    );
  }

}

BandItem.propTypes = {
  deleteBand: PropTypes.func.isRequired,
  auth: PropTypes.array,
  band: PropTypes.object.isRequired
};