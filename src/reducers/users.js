import { SET_USERS } from '../actions/users';


function setUsers(state, users) {
  return users.slice();
}



export default function usersReducer(state = [], action) {
	switch (action.type) {

		case SET_USERS:
			return setUsers(state, action.users);
		default:
			return state;
	}
}
