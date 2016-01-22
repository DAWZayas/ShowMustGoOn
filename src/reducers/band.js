import { SET_BANDS } from '../actions/bands';


function setBands(state, bands) {

  return bands.slice();
}

export default function bandReducer(state = [], action) {
  switch (action.type) {
    case SET_BANDS:
      return setBands(state, action.bands);
    default:
      return state;
    }
}