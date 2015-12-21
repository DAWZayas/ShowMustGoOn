import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import image from '../img/LOGO.png';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      logo: true
    };
  }

  handleLogo(){
    this.setState({
      logo: false
    });
  }

  handleLogoOK(){
    this.setState({
      logo: true
    });
  }

  render() {
    return (
     <div>
        <nav className="navbar navbar-inv">
            <ul className="nav navbar-nav">
              <li onClick={() => this.handleLogoOK()}><Link to="/">Home</Link></li>
              <li onClick={() => this.handleLogo()}><Link to="/preferences">Preferences</Link></li>
              <li onClick={() => this.handleSelecteds}><Link to="/selecteds">Selecteds</Link></li>
            </ul>
        </nav>
        <img className={`${this.state.logo ? 'logo' : 'hidden' }`}  src={image}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};