import { SET_USERS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('users');

    ref.on('value', snapshot => dispatch({
      type: SET_USERS,
      users: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title, info:snapshot.val()[id].info}) )
    }));
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('users');
    ref.off();
    dispatch({
      type: SET_USERS,
      users: []
    });
  };
}