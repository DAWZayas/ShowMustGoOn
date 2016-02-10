

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


export function removeAllButtonClick(id){
  return (dispatch, getState) =>{
    const{firebase, auth} = getState();
    const userId = auth.id;
    firebase.child(`messages/${userId}/${id}/recived/`).remove();
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
