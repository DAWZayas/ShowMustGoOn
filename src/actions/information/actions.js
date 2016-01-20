export function selectConcert(idInfo, assi) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    firebase.child(`info/${idInfo}/users/${userId}`)
      .update({assist: assi});
    
  };
}


export function addInfo(title, date, price, band) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    firebase.child('info')
      .push({title, date, price, band, users: {id: userId} });
    
  };
}