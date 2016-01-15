import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import concerts from './concert';
import bands from './band';
import info from './information';
import comments from './comment';
import auth from './auth';
import firebase from './firebase';
import history from './history';


const concertApp = combineReducers({
  concerts,
  bands,
  router,
  info,
  comments,
  auth,
  firebase,
  history
});

export default concertApp;