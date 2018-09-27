function saveComment() {
  const commentPlace = comment.value;
  if (commentPlace === '') {
    errorTxt.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un comentarios </div>';
    // Limpiar el textarea
    document.getElementById('comment').value = '';
  } else {
    const currentUser = firebase.auth().currentUser;
    const commentPost = comment.value;
    const newMessageKey = firebase.database().ref().child('comments').push().key;
    firebase.database().ref(`comments/${newMessageKey}`).set({
      //creator: currentUser.uid,
      //creatorName: currentUser.displayName || currentUser.email,
      text: commentPlace,
      //email: currentUser.email,
    });
    // Limpiar el textarea
    document.getElementById('comment').value = '';
    // newFunction();
    // otherFunction();
  }
}