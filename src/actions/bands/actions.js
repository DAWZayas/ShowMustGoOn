import { SET_BAND }from './action-types';


export function setbands(bands) {
  return { type: SET_BAND, bands};
}

export function addBand(title, concert) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('bands')
      .push({title, concert});
    
  };
}