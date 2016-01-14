import { SET_CONCERTS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('polls');

    ref.on('value', snapshot => dispatch({
      type: SET_CONCERTS,
      polls: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title}) )
    }));
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('polls');
    ref.off();
    dispatch({
      type: SET_CONCERTS,
      polls: []
    });
  };
}