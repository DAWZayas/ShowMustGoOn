import { SET_BAND }from './action-types';


export function setbands(bands) {
  return { type: SET_BAND, bands};
}

export function addband(title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('bands')
      .push({title});
    
  };
}