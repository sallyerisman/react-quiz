import firebase from "firebase/app"
import 'firebase/auth';
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAsYzp4vw_xXxDPkaMpzqgphCB43qslIrU",
    authDomain: "react-quiz-f7ae4.firebaseapp.com",
    databaseURL: "https://react-quiz-f7ae4.firebaseio.com",
    projectId: "react-quiz-f7ae4",
    storageBucket: "react-quiz-f7ae4.appspot.com",
    messagingSenderId: "893587252221",
    appId: "1:893587252221:web:bab87cf33e95e0e1f4ef94"
};

firebase.initializeApp(config);

// Create shortcut:
const db = firebase.firestore();
const auth = firebase.auth();

export { db }
export { auth }

