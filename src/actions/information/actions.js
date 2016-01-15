import { SET_INFO }from './action-types';


export function addConcert(title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('info')
      .push({title});
    
  };
}