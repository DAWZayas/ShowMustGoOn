import { SET_MESSAGES } from '../actions/messages';

function setMessages(state, messages) {
  return messages.slice();
}

export default function usersReducer(state = [], action) {
	switch (action.type) {

		case SET_MESSAGES:
			return setMessages(state, action.messages);
		default:
			return state;
	}
}
