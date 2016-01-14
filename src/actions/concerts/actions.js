import {SET_CONCERT }from './action-types';


export function setConcerts(concerts) {
  return { type: SET_CONCERTS, concerts};
}

export function addConcert(title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('gustos')
      .push({title});
    
  };
}