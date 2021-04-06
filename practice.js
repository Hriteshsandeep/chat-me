var firebaseConfig = {
    apiKey: "AIzaSyCPd6pP51uzQtgJuJQKsOASTtk-FYbrhUA",
    authDomain: "kwitter-312bf.firebaseapp.com",
    databaseURL: "https://kwitter-312bf-default-rtdb.firebaseio.com",
    projectId: "kwitter-312bf",
    storageBucket: "kwitter-312bf.appspot.com",
    messagingSenderId: "721100563419",
    appId: "1:721100563419:web:e5c4e1a49ba1dea070bdfe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
      });
  }