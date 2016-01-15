import { SET_HISTORY } from '../actions/history';


function setHistory(state, band) {

  return [];
}






export default function bandReducer(state = [], action) {
  switch (action.type) {
    case SET_HISTORY:
      return setHistory(state, action.band);
    default:
      return state;
    }
}