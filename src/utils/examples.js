import { getId } from './index';

export const concerts = [ 
  {
    id: getId(),
    title: 'Rock',
  },
  {
    id: getId(),
    title: 'Metal',
  },
  {
    id: getId(),
    title: 'Indie',
  }
];

export const bands = {
	0: {
    id: '0',
		idConcert: concerts[0].id,
		title: 'Madrid'	
	},
  1: {
    id: '1',
    idConcert: concerts[0].id,
    title: 'Barcelona' 
  },
  2: {
    id: '2',
    idConcert: concerts[1].id,
    title: 'Malaga' 
  },
  3: {
    id: '3',
    idConcert: concerts[1].id,
    title: 'Asturias' 
  },
  4: {
    id: '4',
    idConcert: concerts[2].id,
    title: 'Valencia' 
  },
  5: {
    id: '5',
    idConcert: concerts[2].id,
    title: 'Madrid' 
  },
};



export const initialState = {
  concerts, bands
};