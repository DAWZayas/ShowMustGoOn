//import { pushState } from 'redux-router';
//import sequencer from './sequencer';
/*
 * action types
 */
export const SET_CONCERTS = 'SET_CONCERTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_CONCERT = 'ADD_CONCERT';
export const ADD_COMMENT = 'ADD_COMMENT';



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

/*
 * Band action creators
 */

 /*
 * Coment action creators
 */
 export function setComments(comment) {
  return { type: SET_COMMENTS, comment };
}

export function addComment(idBand, comment) {
  return { type: ADD_COMMENT, idBand, comment };
}


/*
 * Notification action creators
 */


/*
 * Confirm action creators
 */


