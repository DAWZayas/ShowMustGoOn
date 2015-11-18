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

export const bands = [
	{
    id: '0',
		idConcert: concerts[0].id,
		title: 'marea'	
	},
   {
    id: '1',
    idConcert: concerts[0].id,
    title: 'extremo' 
  },
  {
    id: '2',
    idConcert: concerts[1].id,
    title: 'swan' 
  },
  {
    id: '3',
    idConcert: concerts[1].id,
    title: 'bob' 
  },
  {
    id: '4',
    idConcert: concerts[2].id,
    title: 'marilyn' 
  },
  {
    id: '5',
    idConcert: concerts[2].id,
    title: 'cristian' 
  }
];

export const informations = {
  0: {
    idBand: '0',
    title: 'Madrid' 
  },
  1: {
    idBand: '1',
    title: 'Barcelona' 
  },
  2: {
    idBand: '2',
    title: 'Sevilla' 
  },
  3: {
    idBand: '3',
    title: 'Malaga' 
  },
  4: {
    idBand: '4',
    title: 'Boadilla' 
  },
  5: {
    idBand: '0',
    title: 'Majadahonda' 
  }
};



export const initialState = {
  concerts, bands, informations
};