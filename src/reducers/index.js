import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import concerts from './concert';
import bands from './band';
import info from './information';
import comments from './comment';
import actionsPending from './confirm';
import auth from './auth';
import firebase from './firebase';
import search from './search';
import users from './users';
import messages from './messages';


const concertApp = combineReducers({
  concerts,
  bands,
  router,
  info,
  comments,
  actionsPending,
  auth,
  firebase,
  users,
  search,
  messages
});

export default concertApp;