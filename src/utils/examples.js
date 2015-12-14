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
		title: 'Queen of the Stonage'
	},
   {
    id: '1',
    idConcert: concerts[0].id,
    title: 'Extremo Duro'
  },
  {
    id: '2',
    idConcert: concerts[1].id,
    title: 'Slipknot'
  },
  {
    id: '3',
    idConcert: concerts[1].id,
    title: 'System of a Down'
  },
  {
    id: '4',
    idConcert: concerts[2].id,
    title: 'Arctick Monkeys'
  },
  {
    id: '5',
    idConcert: concerts[2].id,
    title: 'Vampire Weekend'
  }
];

export const informations = [
  {
    id:'0',
    idBand: '0',
    title: 'Madrid',
    price: '45',
    asistir: true,
    date: '11/02/2016'
  },
  {
    id:'1',
    idBand: '1',
    title: 'Barcelona',
    price: '40',
    asistir: false,
    date: '10/02/2016'
  },
  {
    id:'2',
    idBand: '2',
    title: 'Madrid',
    price: '55',
    asistir: false,
    date: '10/02/2016'
  },
  {
    id:'3',
    idBand: '3',
    title: 'Barcelona',
    price: '45',
    asistir: false,
    date: '10/02/2016'
  },
  {
    id:'4',
    idBand: '4',
    title: 'Madrd',
    price: '40',
    asistir: false,
    date: '10/02/2016'
  },
  {
    id:'5',
    idBand: '0',
    title: 'Barcelona',
    price: '45',
    asistir: false,
    date: '10/02/2016'
  }
];

export const comments = [
  
];



export const initialState = {
  concerts, bands, informations, comments
};