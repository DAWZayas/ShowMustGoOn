import React, { Component } from 'react';


export default class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  render() {

   const { total }=this.props;
 
    return (
        <span className="badge">{ total } </span>
    );
  }
}
