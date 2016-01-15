


export function addInfo(title, date, price, band) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('info')
      .push({title, date, price, band});
    
  };
}