import { SET_BANDS_SEARCH } from './action-types';
const MIN_SEARCH_STRING_LENGTH = 3;

export function bandSearch(startAt) {
 return (dispatch, getState) => {
  if (startAt.length < MIN_SEARCH_STRING_LENGTH) {
    return dispatch({
      type: SET_BANDS_SEARCH,
      bands: []
    });
  }
   const { firebase } = getState();
   const ref = firebase.child('bands');
   ref.orderByChild('title').startAt(startAt).endAt(`${startAt}\uf8ff`).once('value', snapshot => dispatch({
     type: SET_BANDS_SEARCH,
     bands: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title}) )
  }));
  };

}