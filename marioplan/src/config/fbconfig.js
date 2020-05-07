import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDLyzSv5DUWUNHz1a78lkOfl6tWYf0hdXo",
  authDomain: "marioplan-56b06.firebaseapp.com",
  databaseURL: "https://marioplan-56b06.firebaseio.com",
  projectId: "marioplan-56b06",
  storageBucket: "marioplan-56b06.appspot.com",
  messagingSenderId: "748592076660",
  appId: "1:748592076660:web:328a1a2bdf188082dffe21",
  measurementId: "G-RW3HF3EPHR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
