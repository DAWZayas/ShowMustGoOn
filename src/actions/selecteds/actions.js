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

