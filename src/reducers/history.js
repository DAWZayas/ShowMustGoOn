import { SET_HISTORY } from '../actions/history';


function setHistory(state, title) {

  return {title};
}






export default function historyReducer(state = [], action) {
  switch (action.type) {
    case SET_HISTORY:
      return setHistory(state, action.title);
    default:
      return state;
    }
}