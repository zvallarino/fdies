// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpWj3EdrWt948fgsJ1Tu05fEdnX7XpDtM",
    authDomain: "disease-two.firebaseapp.com",
    projectId: "disease-two",
    storageBucket: "disease-two.appspot.com",
    messagingSenderId: "635284458592",
    appId: "1:635284458592:web:749e0342c34aa363a1c705",
    measurementId: "G-TG2NS2T7T9"
  };
  
// Initialize Firebase
const app =  initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage  };
