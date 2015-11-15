import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import ConcertListContainer from './containers/ConcertListContainer';
import ConcertDetailsContainer from './containers/ConcertDetailsContainer';
import NotificationsDetailContainer from './containers/NotificationsDetailContainer';

export default (
  <Route path="/" component={App}>
  	<Route path="/preferences" component={ConcertListContainer} />
   	<Route path="concert/:idConcert" component={ConcertDetailsContainer} />
   // <Route path="notifications" component={NotificationsDetailContainer} />
    <Redirect path="*" to="/" />
  </Route>
);