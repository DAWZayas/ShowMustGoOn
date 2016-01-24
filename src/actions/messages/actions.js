

export function sendMessage(prop) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
      firebase.child(`messages/${userId}`).update(prop);
  };
}