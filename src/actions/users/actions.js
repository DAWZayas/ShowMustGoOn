import { SET_USERS }from './action-types';


export function setUsers(users) {
  return { type: SET_USERS, users};
}