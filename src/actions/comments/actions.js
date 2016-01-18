import { SET_COMMENTS }from './action-types';


export function setcomments(comments) {
  return { type: SET_COMMENTS, comments};
}

export function addComments(band, title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('comments')
      .push({title, band});
    
  };
}