//import { pushState } from 'redux-router';
//import sequencer from './sequencer';
/*
 * action types
 */
export const SET_CONCERTS = 'SET_CONCERTS';
export const ADD_CONCERT = 'ADD_CONCERT';

/*
 * other constants
 */

export const NotifyLevels = {
	DEBUG: 'DEBUG',
	INFO: 'INFO',
	WARNING: 'WARNING',
	ERROR: 'ERROR'
};

/*
 * Concerts action creators
 */

export function setConcerts(concerts) {
  return { type: SET_CONCERTS, concerts, 
  	meta: {
  	  notify: { level: NotifyLevels.INFO }
  	}
  };
}

export function addConcert(title) {
  return { type: ADD_CONCERT, title, 
  	meta: {
  	  notify: { level: NotifyLevels.INFO }
  	}
  };
}

/*
 * Band action creators
 */


/*
 * Notification action creators
 */


/*
 * Confirm action creators
 */


