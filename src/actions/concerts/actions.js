import { SET_CONCERTS }from './action-types';
import { createActionConfirmation } from '../confirm';


export function setConcerts(concerts) {
  return { type: SET_CONCERTS, concerts};
}

export function addConcert(title) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    firebase.child('concerts')
    .push({title, user});
    
  };
}


export function deleteConcert(idConcert, ConcertTitle) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    const ref = firebase.child(`concerts/${idConcert}/`);
    ref.once('value', function(snapshot){
      const data = snapshot.val();
      if (user === 'github:15048506' || data.user === auth.id){
       dispatch(createActionConfirmation(`Are you sure you want to delete "${ConcertTitle}"`, () => {
         firebase.child(`concerts/${idConcert}`).remove();
       }));
     }
   });
  };

}