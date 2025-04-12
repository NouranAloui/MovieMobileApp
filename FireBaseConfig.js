// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_TrhK3kq1CeR1h3GCc1Jsuf1gfSiIQbA",
    authDomain: "movie-87d0e.firebaseapp.com",
    projectId: "movie-87d0e",
    storageBucket: "movie-87d0e.appspot.com",
    messagingSenderId: "1088633406491",
    appId: "1:1088633406491:web:e945cb3c281271196be4be",
    measurementId: "G-NDNZBFHGEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }