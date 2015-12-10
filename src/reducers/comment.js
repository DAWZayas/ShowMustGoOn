import {  ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT } from '../actions';
import { getId } from '../utils';
import clone from 'clone';


function addComment(state, idBand, comment) {
 
  const idComment = getId();
  const d = new Date();
  const date = d.getDate() + '/' + (d.getMonth() +1) + '/' + d.getFullYear();
  const commentary = {
      idComment,
      idBand,
      date,
      comment
  };


   return state.concat(
    commentary
  );
}

function removeComment(state, idComment){
 return state.filter( commentary => idComment !== commentary.idComment);
}

function editComment(state, idComment, comment) {
let newstate=clone(state);
for (var i = newstate.length - 1; i >= 0; i--) {
  if(newstate[i].idComment===idComment){newstate[i].comment=comment;}
};
return newstate;
} 


export default function commentReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return addComment(state, action.idBand, action.comment);
    case REMOVE_COMMENT:
      return removeComment(state, action.idComment);
    case EDIT_COMMENT:
      return editComment(state, action.idComment, action.comment);
    default:
      return state;
    }
}