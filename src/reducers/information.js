import { SET_INFO } from '../actions/information';

function setInfo(state, info) {
  return info.slice();
}

export default function infoReducer(state = [], action) {
	switch (action.type) {

		case SET_INFO:
			return setInfo(state, action.info);
		default:
			return state;
	}
}
