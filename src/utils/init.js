import configureStore from '../store';
function initialState(){
	return [];
}


export default function init() {
  const store = configureStore(initialState);
  return store;
}