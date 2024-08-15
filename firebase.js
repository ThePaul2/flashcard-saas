 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW5iytVntjZxxVYkswePjUUjswL8-z3js",
  authDomain: "flashcards-116c1.firebaseapp.com",
  projectId: "flashcards-116c1",
  storageBucket: "flashcards-116c1.appspot.com",
  messagingSenderId: "455218716210",
  appId: "1:455218716210:web:3278239c0ee6ce9719e62b",
  measurementId: "G-BDP0LGXY0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);