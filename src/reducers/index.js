import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import concerts from './concert';
import bands from './band';
import informations from './information';

const concertApp = combineReducers({
  concerts,
  bands,
  router,
  informations
});

export default concertApp;