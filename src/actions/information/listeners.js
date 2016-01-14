import { SET_INFO } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('info');

    ref.on('value', snapshot => dispatch({
      type: SET_INFO,
      info: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title}) )
    }));
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('info');
    ref.off();
    dispatch({
      type: SET_INFO,
      info: []
    });
  };
}