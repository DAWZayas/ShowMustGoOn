import { SET_USERS }from './action-types';

export function addToUser(prop) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
      firebase.child(`users/${userId}`).update(prop);
  };
}