// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDXEL4JFo-q4crzmQ5ppacha0ythYd7HUg",
//     authDomain: "taskapp-585a7.firebaseapp.com",
//     projectId: "taskapp-585a7",
//     storageBucket: "taskapp-585a7.appspot.com",
//     messagingSenderId: "383802467484",
//     appId: "1:383802467484:web:3f2ba7596d41c369e53959",
//     measurementId: "G-PGQPMPTQFT"
//   };


import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDXEL4JFo-q4crzmQ5ppacha0ythYd7HUg",
        authDomain: "taskapp-585a7.firebaseapp.com",
        projectId: "taskapp-585a7",
        storageBucket: "taskapp-585a7.appspot.com",
        messagingSenderId: "383802467484",
        appId: "1:383802467484:web:3f2ba7596d41c369e53959",
        measurementId: "G-PGQPMPTQFT"
  });

  const db = firebaseApp.firestore();
  const storage = firebaseApp.storage;

  
  export  {db, storage};