// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
//import 'firebase/auth';
//import 'firebase/firebase-firestore';
const config = {
    apiKey: "AIzaSyCdQ-zKABl1lxre59eb_8JIF6Hq7S1Y6Kg",
    authDomain: "authentication-app-654d7.firebaseapp.com",
    databaseURL: "https://authentication-app-654d7.firebaseio.com",
    projectId: "authentication-app-654d7",
    storageBucket: "authentication-app-654d7.appspot.com",
    messagingSenderId: "501356366280",
    appId: "1:501356366280:web:c8e19664a7e828966ed8fd",
   // measurementId: "G-Y1VC45WTKD"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;