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
  <nav className="navbar navbar-default" role="navigation">
   <Link to="/"><img className="navbar-brand"  src={image}/></Link>
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse"
              data-target=".navbar-ex1-collapse">
        <span className="sr-only">Desplegar navegación</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
     
    </div>
   

    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav">
        <li><a href="#">Enlace #1</a></li>
        <li onClick={() => this.handleLogo()}><Link to="/preferences">Preferences</Link></li>
      </ul>
   
      <ul className="nav navbar-nav navbar-right">
        <li onClick={() => this.handleLogo()}><Link to="/selecteds">Yours Concerts</Link></li>
      </ul>
    </div>
  </nav>
    <img className={`${this.state.logo ? 'logo' : 'hidden' }`}  src={image}/>
        {this.props.children}
</div>



      /*
     <nav className="navbar navbar-default" role="navigation">>
       <div className="navbar-header">
         <button type="button" className="navbar-toggle" data-toggle="collapse"
         data-target=".navbar-ex1-collapse">
           <span className="sr-only">Desplegar navegación</span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
         </button>
         <a className="navbar-brand" href="#">Logotipo</a>
       </div>
       <div>
         <nav className="navbar navbar-inv">
         <ul className="nav navbar-nav">
           <li onClick={() => this.handleLogoOK()}><Link to="/">Home</Link></li>
           <li onClick={() => this.handleLogo()}><Link to="/preferences">Preferences</Link></li>
           <li onClick={() => this.handleLogo()}><Link to="/selecteds">Yours Concerts</Link></li>
         </ul>
         </nav>
         <img className={`${this.state.logo ? 'logo' : 'hidden' }`}  src={image}/>
         {this.props.children}
       </div>
     </nav>
    */);
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};