import React, { Component, PropTypes } from 'react';
import { a } from 'react-router';
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
    const { children, search } = this.props;



    return (


<div>
 <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
               <a  className="navbar-brand" href="/">ShowMustGoOn</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="search">
                         <input type="text" placeholder="Search..." ref="title" onChange={e => this.handleOnChangeTitle(e)}/>
                         <ul className="results" >
                          {
                            search.map( (band, index) =>  <li className="list-group-item" key={index}><a href={`band/${band.id}`}>{band.title}</a></li> )
                          }
                         </ul>

                    </li>
                  </ul>
                  <ul className="nav navbar-nav">
                    <li className="page-scroll" >
                        <a href="/preferences">Preferences</a>
                    </li>
                    <li >
                        <a href="/selecteds">Yours Concerts</a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    </nav>
    <header>
        <div className="container-fluid">

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
    search: state.search
  }),   Object.assign( {}, authActions, { bandSearch }))(App);
