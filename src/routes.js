import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import ConcertListContainer from './containers/ConcertListContainer';
import ConcertDetailsContainer from './containers/ConcertDetailsContainer';
import BandDetailsContainer from './containers/BandDetailsContainer';
import ConcertsSelectedsContainer from './containers/ConcertsSelectedsContainer';
import SignInContainer from './containers/SignInContainer';
import UsersListContainer from './containers/UsersListContainer';
import ProfileContainer from './containers/ProfileContainer';

export default (
  <Route path="/" component={App}>
  	<Route path="/preferences" component={ConcertListContainer} />
  	<Route path="/selecteds" component={ConcertsSelectedsContainer} />
   	<Route path="concert/:idConcert" component={ConcertDetailsContainer} />
    <Route path="band/:id" component={BandDetailsContainer} />
    <Route path="users/:id" component={UsersListContainer} />
    <Route path="profile" component={ProfileContainer} />    
    <Route path="sign-in" component={SignInContainer} />   
    <Redirect path="*" to="/" />
  </Route>
);