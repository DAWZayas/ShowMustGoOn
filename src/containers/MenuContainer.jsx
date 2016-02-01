import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bandSearch } from '../actions/bandSearch/actions.js';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth/index.js';
import Spinner from '../components/Spinner';





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps() {

    this.setState({ loading: false });
  }

  handleOnChangeTitle() {
    const node = this.refs.title;
    const title =  node.value;

    function capitaliseFirstLetter(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const firstLetter = capitaliseFirstLetter(title);
    this.props.bandSearch(firstLetter);
  }

  handleSignOutButtonClick(){
    this.props.signOut();
  }

  render() {
    const { search } = this.props;



    return (

 <nav className="navbar navbar-inverse">
        <div className="container-fluid 2">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
               <Link className="navbar-brand" to="/">ShowMustGoOn</Link>
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
                    
                          <li className={this.props.auth.authenticated?'nav navbar-nav':'hidden'}>
                              <Link to="/messages">Messages</Link>
                          </li> 
                          <li className={this.props.auth.authenticated?'nav navbar-nav':'hidden'}>
                              <Link to="/profile">Profile</Link>
                          </li>                    
                          <li className={this.props.auth.authenticated?'hidden':'nav navbar-nav'}>
                              
                              <Link to="/sign-in">Sign-in</Link>
                              
                          </li>
                          <li className={this.props.auth.authenticated?'nav navbar-nav':'hidden'}>
                              <Link to="/" onClick={e => this.handleSignOutButtonClick(e)}>
                              <span className="glyphicon glyphicon-off red"/></Link>
                          </li>
                </ul>
                  <ul className="nav navbar-nav">
                    <li className="nav navbar-nav">
                        <Link to="/preferences">Preferences</Link>
                    </li>                    
                    <li className={this.props.auth.authenticated?'nav navbar-nav':'hidden'}>
                        <Link to="/selecteds">Your Concerts</Link>
                    </li>

                </ul>

            </div>
        </div>
        </nav>

    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  bandSearch: PropTypes.object.isRequired,
  signOut: PropTypes.object.isRequired,
  search: PropTypes.array,
  auth: PropTypes.object.isRequired
 };

export default connect(
  state => ({
    auth: state.auth,
    search: state.search
  }),   Object.assign( {}, authActions, { bandSearch }))(App);