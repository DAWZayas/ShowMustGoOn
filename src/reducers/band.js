import {  ADD_BAND } from '../actions';




function addBand(state, title, idConcert) {
	let id= state.length;
	let nam= title;
	let idC= idConcert;
	let newBand={
		id: id,
		idConcert: idC,
		title: nam
	};
   return state.concat(
    newBand
  );
}



export default function bandReducer(state = [], action) {
  switch (action.type) {
    case ADD_BAND:
      return addBand(state, action.title, action.idConcert);
    default:
      return state;
    }
}