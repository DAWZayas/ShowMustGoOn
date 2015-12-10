import { getId } from './index';

export const concerts = [ 
  {
    id: getId(),
    title: 'Rock'
  },
  {
    id: getId(),
    title: 'Metal'
  },
  {
    id: getId(),
    title: 'Indie'
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

export const informations = [
  {
    id:'0',
    idBand: '0',
    title: 'Madrid',
    price: '234',
    asistir: true,
    date: '8/8/90'
  },
  {
    id:'1',
    idBand: '1',
    title: 'Barcelona',
    price: '234',
    asistir: false,
    date: '8/8/90'
  },
  {
    id:'2',
    idBand: '2',
    title: 'Sevilla',
    price: '234',
    asistir: false,
    date: '8/8/90'
  },
  {
    id:'3',
    idBand: '3',
    title: 'Malaga',
    price: '234',
    asistir: false,
    date: '8/8/90'
  },
  {
    id:'4',
    idBand: '4',
    title: 'Boadilla',
    price: '234',
    asistir: false,
    date: '8/8/90'
  },
  {
    id:'5',
    idBand: '0',
    title: 'Majadahonda',
    price: '234',
    asistir: false,
    date: '8/8/90'
  }
];

export const comments = [

];



export const initialState = {
  concerts, bands, informations, comments
};