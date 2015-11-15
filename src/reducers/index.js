import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import concerts from './concert';
import places from './place';

const concertApp = combineReducers({
  concerts,
  places,
  router,
});

export default concertApp;