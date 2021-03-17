//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0VA0IFgeWuZ4L78ZDx8YGzq9u2ufRR_I",
    authDomain: "chatbot-bkvr.firebaseapp.com",
    databaseURL: "https://chatbot-bkvr-default-rtdb.firebaseio.com",
    projectId: "chatbot-bkvr",
    storageBucket: "chatbot-bkvr.appspot.com",
    messagingSenderId: "954763015913",
    appId: "1:954763015913:web:8e34d42081789b6f52e278"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
