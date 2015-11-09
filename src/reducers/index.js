import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import Rock from './Rock';
import Indie from './Indie';
import Metal from './Metal';


export default combineReducers({
  Rock,
  Indie,
  Metal,
  router
 
});
