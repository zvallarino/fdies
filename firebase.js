// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDg0SA83QzAW3e_6bqwE6kGgp2p5NrEhYw",
  authDomain: "diseasetracker-a5b51.firebaseapp.com",
  projectId: "diseasetracker-a5b51",
  storageBucket: "diseasetracker-a5b51.appspot.com",
  messagingSenderId: "444664241080",
  appId: "1:444664241080:web:77907be28bca220a8e8d4d",
  measurementId: "G-SDEJZG9VWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db  };
