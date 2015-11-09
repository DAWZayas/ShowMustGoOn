import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Show Must Go On!</h1>
       <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Rock">Rock</Link></li>
              <li><Link to="/Indie">Indie</Link></li>
              <li><Link to="/Metal">Metal</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}



App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};
