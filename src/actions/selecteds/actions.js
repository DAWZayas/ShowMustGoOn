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


/*export function deleteSelecteds(){
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`users/${userId}/info`);
    ref.once('value', function(snapshot){
      snapshot.forEach(function (infoUser){
        let exist = false;
        const refr = firebase.child(`info`);
          refr.once('value', function(snapshot2){
            snapshot2.forEach(function (info){
              if (infoUser.key()===info.key()) {exist = true;}
            });
          }
        );
      if(!exist){firebase.child(`users/${userId}/info/${infoUser.key()}`).remove();}
      });
    });   
  };
}*/


