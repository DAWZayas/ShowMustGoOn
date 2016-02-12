import { createActionConfirmation } from '../confirm';


export function sendMessage(msg, id) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const time = Date.now();
    let obj = {time: time, msg: msg}; 
    let obj2 = {time: time, msg: msg, read:false}; 
      firebase.child(`messages/${id}/${userId}/recived`).push(obj2);
      firebase.child(`messages/${userId}/${id}/sent`).push(obj);
  };
}
export function removeAllButtonClick(){
     return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id; 
       dispatch(createActionConfirmation(`Are you sure you want to clean?`, () => {
       firebase.child(`messages/${userId}`).remove();
       }));
  };
}

export function deleteMessageClick(messageId){
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    dispatch(createActionConfirmation(`Are you sure you want to delete `, () => {
      firebase.child(`messages/${user}/${messageId}`).remove();
    }));
  };
}


export function readed(id) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id; 
    const ref = firebase.child(`messages/${userId}/${id}/recived`);
    ref.once('value', function(snapshot){
      snapshot.forEach(function (data){
        firebase.child(`messages/${userId}/${id}/recived/${data.key()}`).update({read: true});
      }
      );
    });    
  };
}
