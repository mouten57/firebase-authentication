import firebase from 'firebase/app';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBFpDTSPHiyLYqhvhAMixYWnie-ClU3iFk",
    authDomain: "authentication-98e9e.firebaseapp.com",
    databaseURL: "https://authentication-98e9e.firebaseio.com",
    projectId: "authentication-98e9e",
    storageBucket: "authentication-98e9e.appspot.com",
    messagingSenderId: "700338664669"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};