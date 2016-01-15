import { SET_BANDS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('bands');

    ref.on('value', snapshot => dispatch({
      type: SET_BANDS,
      bands: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title, concert:snapshot.val()[id].concert}) )
    }));
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('bands');
    ref.off();
    dispatch({
      type: SET_BANDS,
      bands: []
    });
  };
}