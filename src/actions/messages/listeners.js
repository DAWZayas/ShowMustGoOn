import { SET_MESSAGES } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const ref = firebase.child(`messages/${auth.id}`);

    ref.on('value', snapshot => dispatch({
      type: SET_MESSAGES,
      messages: Object.keys(snapshot.val() || []).map( id => ({id, user:snapshot.val()[id].user}) )
    }));
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('messages');
    ref.off();
    dispatch({
      type: SET_MESSAGES,
      messages: []
    });
  };
}