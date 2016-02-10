import { SET_MESSAGES, SET_USERS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const ref = firebase.child(`messages/${auth.id}`);

    ref.on('value', snapshot => dispatch({
      type: SET_MESSAGES,
      messages: Object.keys(snapshot.val() || []).map( id => ({id, recived:snapshot.val()[id].recived, sent:snapshot.val()[id].sent}) )
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

export function registerListenersUsers() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('users');

    ref.on('value', snapshot => dispatch({
      type: SET_USERS,
      users: Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name, age:snapshot.val()[id].age, description:snapshot.val()[id].description, image:snapshot.val()[id].image}) )
    }));
  };
}

export function unregisterListenersUsers() {
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

