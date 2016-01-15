import { SELECTED_CONCERT, ADD_INFO, SET_INFO } from '../actions/information';

function selectedConcert(state, index){
	return state;

}


function setInfo(state, info) {
  return info.slice();
}

function addInfo(state, title) {
  
  return state.concat({
  	id: getId(),
  	title
    
  });
}

export default function infoReducer(state = [], action) {
	switch (action.type) {
		case SELECTED_CONCERT:
			return selectedConcert(state, action.index);
		case ADD_INFO:
			return addInfo(state, action.title, action.date, action.price, action.id);
		case SET_INFO:
			return setInfo(state, action.info);
		default:
			return state;
	}
}
