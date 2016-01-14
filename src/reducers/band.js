import {  ADD_BAND, SET_BANDS } from '../actions/bands';


function setBands(state, bands) {

  return bands.slice();
}

function addBands(state, title) {
  
  return state.concat({
    id: getId(),
    title
    
  });
}






export default function bandReducer(state = [], action) {
  switch (action.type) {
    case ADD_BAND:
      return addBands(state, action.title, action.idConcert);
    case SET_BANDS:
      return setBands(state, action.bands);
    default:
      return state;
    }
}