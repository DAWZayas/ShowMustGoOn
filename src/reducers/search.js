import {  SET_BANDS_SEARCH } from '../actions/bandSearch';

function setSearch(state, bands) {

  return bands.slice();
}

export default function bandReducer(state = [], action) {
  switch (action.type) {
    case SET_BANDS_SEARCH:
      return setSearch(state, action.bands);
    default:
      return state;
    }
}