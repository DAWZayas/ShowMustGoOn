import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import image from '../img/logo.png';



export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<nav className="navbar navbar-inv">
          <div className="container">
            <div className="navbar-header">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>
            <ul className="nav navbar-nav">
              <li> <img className="logo" style={{ height:'70' }}   src={image}/></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/preferences">Preferences</Link></li>
          
            </ul>
          </div>
        </nav>

  	    {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};