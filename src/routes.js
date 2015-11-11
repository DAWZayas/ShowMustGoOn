import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import ShowRockList from './components/ShowRockList';
import ShowMetalList from './components/ShowMetalList';
import ShowIndieList from './components/ShowIndieList';

export default (
  <Route path="/" component={App}>
  	<Route path="rock" component={ShowRockList} />
  	<Route path="metal" component={ShowMetalList} />
  	<Route path="indie" component={ShowIndieList} />
    <Redirect path="*" to="/" />
  </Route>
);