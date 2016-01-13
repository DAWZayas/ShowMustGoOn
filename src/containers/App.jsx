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
 <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
               <Link  className="navbar-brand" to="/">ShowMustGoOn</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll" onClick={() => this.handleLogo()}>
                        <Link to="/preferences">Preferences</Link>
                    </li>
                    <li conClick={() => this.handleLogo()}>
                        <Link to="/selecteds">Yours Concerts</Link>
                    </li>
                </ul>
            </div>
            
        </div>
        
    </nav>
    <header>
        <div className="container">
            <br/><br/><br/>
            <div className="row">
                {this.props.children}
            </div>
        </div>
    </header>
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