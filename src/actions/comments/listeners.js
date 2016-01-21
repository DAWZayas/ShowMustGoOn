import { SET_COMMENTS } from './action-types';

export function registerListenersComments() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('comments');

    ref.on('value', snapshot => dispatch({
      type: SET_COMMENTS,
      comments: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title, band:snapshot.val()[id].band, user:snapshot.val()[id].user}) )
    }));
  };
}

export function unregisterListenersComments() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('comments');
    ref.off();
    dispatch({
      type: SET_COMMENTS,
      comments: []
    });
  };
}