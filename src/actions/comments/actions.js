import { SET_COMMENTS }from './action-types';


export function setcomments(comments) {
  return { type: SET_COMMENTS, comments};
}

export function addComments(band, title) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    if(user!==null){
      firebase.child('comments')
      .push({title, band, user});
    }
    
  };
}

export function removeComment(idComment) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    const ref = firebase.child(`comments/${idComment}/`);
    ref.once('value', function(snapshot){
      const data = snapshot.val();
      if (data.user===user){
       firebase.child(`comments/${idComment}`).remove();
      }else{
        alert('This is not your Comment, Bitch' );
      }
    });
    
  };

}

export function editComment(title, idComment) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    firebase.child(`comments/${idComment}`)
      .update({title});
    
  };
}