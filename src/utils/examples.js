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
		title: 'Marea'
	},
   {
    id: '1',
    idConcert: concerts[0].id,
    title: 'Extremo'
  },
  {
    id: '2',
    idConcert: concerts[1].id,
    title: 'Swan'
  },
  {
    id: '3',
    idConcert: concerts[1].id,
    title: 'Bob'
  },
  {
    id: '4',
    idConcert: concerts[2].id,
    title: 'Marilyn'
  },
  {
    id: '5',
    idConcert: concerts[2].id,
    title: 'Cristian'
  }
];

export const informations = {
  0: {
    idBand: '0',
    title: 'Madrid',
    price: '56'
  },
  1: {
    idBand: '1',
    title: 'Barcelona',
    price: '65' 
  },
  2: {
    idBand: '2',
    title: 'Sevilla',
    price: '63245'  
  },
  3: {
    idBand: '3',
    title: 'Malaga',
    price: '63245'  

  },
  4: {
    idBand: '4',
    title: 'Boadilla',
    price: '63245'  

  },
  5: {
    idBand: '0',
    title: 'Majadahonda',
    price: '63245'  

  }
};

export const comments = {
  0: {
    idComment: '0',
    idBand: bands[0].id,
    date: Date(),
    comment:' Escribe aqui tu comentario'
  }
};

export const initialState = {
  concerts, bands, informations, comments
};