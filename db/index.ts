// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjKXPlWK6SzIHu8oHdV6qR3J1Dh2ayD7k",
  authDomain: "nameyourprice-46825.firebaseapp.com",
  projectId: "nameyourprice-46825",
  storageBucket: "nameyourprice-46825.appspot.com",
  messagingSenderId: "309520334022",
  appId: "1:309520334022:web:8864c9563fe393fea0abc7",
  measurementId: "G-77W0FZL50K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
