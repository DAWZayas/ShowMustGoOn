import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import concerts from './concert';
import bands from './band';

const concertApp = combineReducers({
  concerts,
  bands,
  router,
});

export default concertApp;