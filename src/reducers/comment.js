import {  ADD_COMMENT, REMOVE_COMMENT } from '../actions';
import { getId } from '../utils';


function addComment(state, idBand, comment) {
  const idComment = getId();
  const date = Date();
  const commentary = {
    [idComment]: {
      idComment,
      idBand,
      date,
      comment
    }
  };
return Object.assign({}, state, commentary);
}

function removeComment(state, idComment){
  return Object.values(state).reduce( (comments, commentary) =>  commentary.idComment === idComment ? comments : Object.assign(comments, {[commentary.idComment]: commentary}), {});

}

export default function commentReducer(state = [], action) {
	switch (action.type) {
  	case ADD_COMMENT:
  		return addComment(state, action.idBand, action.comment);
    case REMOVE_COMMENT:
      return removeComment(state, action.idComment);
  	default:
  		return state;
  	}
}