import { SET_INFO, SET_BANDS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('info');

    ref.on('value', snapshot => dispatch({
      type: SET_INFO,
      info: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title, band:snapshot.val()[id].band, price:snapshot.val()[id].price, date:snapshot.val()[id].date, users: snapshot.val()[id].users, creator: snapshot.val()[id].creator}) )
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



export function registerListenersBandz() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('bands');

    ref.on('value', snapshot => dispatch({
      type: SET_BANDS,
      bands: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title, concert:snapshot.val()[id].concert}) )
    }));
  };
}

export function unregisterListenersBand() {
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