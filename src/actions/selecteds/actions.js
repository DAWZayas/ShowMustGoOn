export function selectConcert(idInfo) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`info/${idInfo}/users/${userId}`);
    ref.once('value', function(snapshot){
      let data=snapshot.val();
      if (data===null){data={assist: true};}

      firebase.child(`info/${idInfo}/users/${userId}`).update({assist: !data.assist});
      firebase.child(`users/${userId}/info/${idInfo}`).update({assist: !data.assist});

    });

  };
}

export function deleteConcertAssist(idInfo, InfoTitle) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const user = auth.id;
    const ref = firebase.child(`info/${idInfo}/`);
    ref.once('value', function(snapshot){
      const data = snapshot.val();
      if (data.user===user || user === 'github:15048506'){
       dispatch(createActionConfirmation(`Are you sure you want to delete "${InfoTitle}"`, () => {
       firebase.child(`info/${idInfo}`).remove();
       }));
      }
    });
  };

}