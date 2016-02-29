import { SET_CONCERTS } from '../actions';

function setConcerts(state, concerts) {
  return concerts.slice();
}

export default function concertReducer(state = [], action) {
	switch (action.type) {
  	case SET_CONCERTS:
  		return setConcerts(state, action.concerts);
  	default:
  		return state;
  	}
}