import { SET_BANDS }from './action-types';


export function setbands(bands) {
  return { type: SET_BANDS, bands};
}

export function addBand(title, concert) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    firebase.child('bands')
      .push({title, concert, user});
    
  };

}
/*export function deleteBand(idBand) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    const ref = firebase.child(`bands/${idBand}/`);
    ref.once('value', function(snapshot){
    debugger;
    if (snapshot.val()[id].user===user){
   		 firebase.child(`bands/${idBand}`).remove;
     }

    });
  };

}*/