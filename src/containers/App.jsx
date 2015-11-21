import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1>Show Must Go on</h1>
      	<nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>
            <ul className="nav navbar-nav">
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