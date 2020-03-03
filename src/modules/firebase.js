import firebase from "firebase/app"
import "firebase/firestore"

const config = {
    // apiKey: "AIzaSyCUSjH2uGCJ1SBeLhRK3rW0necM3Xsjzw0",
    // authDomain: "my-to-dos-67dd0.firebaseapp.com",
    // databaseURL: "https://my-to-dos-67dd0.firebaseio.com",
    // projectId: "my-to-dos-67dd0",
    // storageBucket: "my-to-dos-67dd0.appspot.com",
    // messagingSenderId: "23336981121",
    // appId: "1:23336981121:web:b474d9079b4805915d7380"
};

// Initialize firebase:
firebase.initializeApp(config);

// Create shortcut:
const db = firebase.firestore();

export { db }