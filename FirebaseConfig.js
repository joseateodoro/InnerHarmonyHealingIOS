// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgPI_sDIYqpGkm8Jch6_YguRMLLXzN3c8",
  authDomain: "innerharmonyhealing-dbaad.firebaseapp.com",
  databaseURL: "https://innerharmonyhealing-dbaad-default-rtdb.firebaseio.com",
  projectId: "innerharmonyhealing-dbaad",
  storageBucket: "innerharmonyhealing-dbaad.appspot.com",
  messagingSenderId: "117387750157",
  appId: "1:117387750157:web:97cbdedf95ef2d183b9e44"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);