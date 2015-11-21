import {  ADD_COMMENT } from '../actions';
import { getId } from '../utils';


function addComment(state, idBand, comment) {
  const idComment = getId();
  const date = Date();
  const comments = {
    [idComment]: {
      idComment,
      idBand,
      date,
      comment
    }
  };
return Object.assign({}, state, comments);
}

export default function commentReducer(state = [], action) {
	switch (action.type) {
  	case ADD_COMMENT:
  		return addComment(state, action.idBand, action.comment);
  	default:
  		return state;
  	}
}