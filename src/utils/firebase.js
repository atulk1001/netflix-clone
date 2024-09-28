// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZjsxzu_-q4m8gYINqs2ePyw5S8aOG9Ho",
  authDomain: "netflix-8bc8a.firebaseapp.com",
  projectId: "netflix-8bc8a",
  storageBucket: "netflix-8bc8a.appspot.com",
  messagingSenderId: "35517841472",
  appId: "1:35517841472:web:741c1637a35e08a150dfa5",
  measurementId: "G-X6E48892N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);