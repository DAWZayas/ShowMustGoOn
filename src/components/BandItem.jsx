  import React, { Component, PropTypes } from 'react';
  import { Link } from 'react-router';



  export default class BandItem extends Component {

    constructor(props) {
      super(props);
    }


    handelOnclickRemove(id, title){
      this.props.deleteBand(id, title);
    }


    render() {

      const { band, auth } = this.props;
      return (
        <li className="list-group-item action-element">
          <Link  to={`/band/${band.id}`}{...this.props}>{band.title}</Link>   
          <span className={auth.authenticated || band.user === auth.id || auth.id === 'github:15048506' ? 'pull-right glyphicon glyphicon-trash action-icon' : 'hidden'} onClick={() => this.handelOnclickRemove(band.id, band.title) }></span>
        </li>
        
        );
    }

  }

  BandItem.propTypes = {
    deleteBand: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    band: PropTypes.object.isRequired
  };