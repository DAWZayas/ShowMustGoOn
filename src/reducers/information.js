import { SELECTED_CONCERT, ADD_INFO } from '../actions';

function selectedConcert(state, index){
	return state.map( information => information.id === index ? Object.assign({},  information, {asistir: !information.asistir}) : information);

}

function addInfo(state, title, date, price, idBand){
	const id = state.lenght;
	let newInfo={
		title,
		price,
		date,
		idBand,
		id
	};

  return state.concat(
  	newInfo
  );

}

export default function informationsReducer(state = [], action) {
	switch (action.type) {
		case SELECTED_CONCERT:
			return selectedConcert(state, action.index);
		case ADD_INFO:
			return addInfo(state, action.title, action.date, action.price, action.id);
		default:
			return state;
	}
}
