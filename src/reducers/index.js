import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import concerts from './concert';
import bands from './band';
import informations from './information';
import comments from './comment';


const concertApp = combineReducers({
  concerts,
  bands,
  router,
  informations,
  comments
});

export default concertApp;