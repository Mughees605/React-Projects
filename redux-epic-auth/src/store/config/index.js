import firebase from "firebase";

 var config = {
    apiKey: "AIzaSyA67XwaTWpODIdwhptuxfU174wABAS4M7k",
    authDomain: "crime-report-app-react.firebaseapp.com",
    databaseURL: "https://crime-report-app-react.firebaseio.com",
    storageBucket: "crime-report-app-react.appspot.com",
    messagingSenderId: "213290974287"
  };
  firebase.initializeApp(config);

  export default firebase;