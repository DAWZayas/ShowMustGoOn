import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { push } from 'redux-router';
import { bandSearch } from '../actions/bandSearch/actions.js';
import { connect } from 'react-redux';
import { authActions } from '../actions/auth';




class App extends Component {

  constructor(props) {
    super(props);
  }


  /*  if (auth.authenticated && !nextProps.auth.authenticated) {
      history.replaceState(null, authActions.POST_SIGN_OUT_PATH);
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      history.replaceState(null, authActions.POST_SIGN_IN_PATH);
    }
  }
  signOut() {
    this.props.signOut();
    window.location.replace('/');
  }*/
    handleOnChangeTitle() {
    const node = this.refs.title;
    const title =  node.value;
    this.props.bandSearch(title);

  }

  render() {
    const { children, bands } = this.props;



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
                    <li className="search">
                         <input type="text" placeholder="Search..." ref="title" onChange={e => this.handleOnChangeTitle(e)}/>
                         <ul className="results" >
                          {
                            bands.map( (band, index) =>  <li className="list-group-item" key={index}><a href={`band/${band.id}`}>{band.title}</a></li> )
                          }
                         </ul>

                    </li>
                    <li className="page-scroll" >
                        <Link to="/preferences">Preferences</Link>
                    </li>
                    <li >
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
                {children}
            </div>
        </div>
    </header>
  </div>





);
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
 };

export default connect(
  state => ({
    auth: state.auth,
    bands: state.bands
  }),   Object.assign( {}, authActions, { bandSearch }))(App);
