import { SET_CONCERTS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('gustos');

    ref.on('value', snapshot => dispatch({
      type: SET_CONCERTS,
      concerts: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title}) )
    }));
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('gustos');
    ref.off();
    dispatch({
      type: SET_CONCERTS,
      concerts: []
    });
  };
}