import { SELECTED_CONCERT } from '../actions';

function selectedConcert(state, index){
	return state.map( information => information.id === index ? Object.assign({},  information, {asistir: !information.asistir}) : information);

}

export default function informationsReducer(state = [], action) {
	switch (action.type) {
		case SELECTED_CONCERT:
			return selectedConcert(state, action.index);
		default:
			return state;
	}
}
