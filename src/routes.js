import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import ConcertListContainer from './containers/ConcertListContainer';
import ConcertDetailsContainer from './containers/ConcertDetailsContainer';
import BandDetailsContainer from './containers/BandDetailsContainer';

export default (
  <Route path="/" component={App}>
  	<Route path="/preferences" component={ConcertListContainer} />
   	<Route path="concert/:idConcert" component={ConcertDetailsContainer} />
    <Route path="band/:id" component={BandDetailsContainer} />
    <Redirect path="*" to="/" />
  </Route>
);