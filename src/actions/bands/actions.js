import { SET_BANDS }from './action-types';
import { createActionConfirmation } from '../confirm';


export function setbands(bands) {
  return { type: SET_BANDS, bands};
}

export function addBand(titleLower, concert) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    function capitaliseFirstLetter(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const title = capitaliseFirstLetter(titleLower);
 

    firebase.child('bands')
      .push({title, concert, user});
    
  };

}
export function deleteBand(idBand, bandTitle) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    const ref = firebase.child(`bands/${idBand}/`);
    ref.once('value', function(snapshot){
      const data = snapshot.val();
      if (data.user===user || user === 'github:15048506'){
        infoInBand(idBand, getState, (exists) => {
          if (!exists) {
            dispatch(createActionConfirmation(`Are you sure you want to delete "${bandTitle}"`, () => {
              firebase.child(`bands/${idBand}`).remove();
            }));
          }
          else{alert('band is not empty');}           
        });
      }else{
        alert('This is not your band');
      }
    });
  };

}

function infoInBand(idBand, getState, cbk){
  const { firebase } = getState();
  const ref = firebase.child(`info`);
  
  ref.once('value', function(snapshot){
    let exists = false;
    snapshot.forEach(info => { 
      if (info.val().band===idBand) {
        exists = true;
        return;
      }
    });
    cbk(exists);
  });
}