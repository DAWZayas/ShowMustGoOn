//import { pushState } from 'redux-router';
//import sequencer from './sequencer';
/*
 * action types
 */
export const SET_CONCERTS = 'SET_CONCERTS';
export const ADD_CONCERT = 'ADD_CONCERT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const SELECTED_CONCERT = 'SELECTED_CONCERT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const ADD_BAND = 'ADD_BAND';
export const ADD_INFO = 'ADD_INFO';
import * as authActions from './auth';
export { authActions };




/*
 * other constants
 */

/*
 * Concerts action creators
 */

export function setConcerts(concerts) {
  return { type: SET_CONCERTS, concerts};
}

export function addConcert(title) {
  return { type: ADD_CONCERT, title};
}

export function selectedConcert(index) {
  return { type: SELECTED_CONCERT, index};
}

export function addBand(title, idConcert) {
  return { type: ADD_BAND, title, idConcert};
}


export function addInfo(title, date, price, id) {
  return { type: ADD_INFO, title, date, price, id};
}



/*
 * Band action creators
 */

 /*
 * Coment action creators
 */


export function addComment(idBand, comment) {
  return { type: ADD_COMMENT, idBand, comment };
}

export function removeComment(idComment){
  return { type: REMOVE_COMMENT, idComment};
}

export function editComment(idComment, comment){
  return { type: EDIT_COMMENT, idComment, comment};
}


/*
 * Notification action creators
 */


/*
 * Confirm action creators
 */


