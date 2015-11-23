import { SELECTED_CONCERT } from '../actions';

function selectedConcert(state, index){
	for (var i = state.length - 1; i >= 0; i--) {
		if(state[i].id === index){state[i].asistir=!state[i].asistir;}
	}
	return state;

}

export default function informationsReducer(state = [], action) {
	switch (action.type) {
		case SELECTED_CONCERT:
			return selectedConcert(state, action.index);
		default:
			return state;
	}
}
