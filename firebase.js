// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCexb7mSCrd96vwRqsmRaYlk8HBiWTfv_g",
    authDomain: "superapk-a42b6.firebaseapp.com",
    projectId: "superapk-a42b6",
    storageBucket: "superapk-a42b6.appspot.com",
    messagingSenderId: "738797783762",
    appId: "1:738797783762:web:e10d3c467b114c5935fb0b",
    measurementId: "G-41YTQQ8HT7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };