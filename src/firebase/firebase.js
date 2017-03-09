var firebase = require("firebase")
var config = {
    apiKey: "AIzaSyBLZRJiVLkk_i80cDZFR54HDhlSypKanps",
    authDomain: "react-blood-bank-1dc43.firebaseapp.com",
    databaseURL: "https://react-blood-bank-1dc43.firebaseio.com",
    storageBucket: "react-blood-bank-1dc43.appspot.com",
    messagingSenderId: "449387437817"
  };
  firebase.initializeApp(config);
  export var myFirebase = firebase
  export default firebase;