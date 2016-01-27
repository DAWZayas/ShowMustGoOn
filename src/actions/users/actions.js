
export function addToUser(prop) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
      firebase.child(`users/${userId}`).update(prop);
  };
}


export function sendMessage(msg, id) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const time = Date.now();
    let obj = {time: time, msg: msg}; 
      firebase.child(`messages/${id}/${userId}/recived`).push(obj);
      firebase.child(`messages/${userId}/${id}/sent`).push(obj);
  };
}