

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ1ieWXJTK0W8mRs-roKH00zRUD8fKGts",
  authDomain: "octotech-a8977.firebaseapp.com",
  projectId: "octotech-a8977",
  storageBucket: "octotech-a8977.appspot.com",
  messagingSenderId: "782302694066",
  appId: "1:782302694066:web:bdd2d16b2b2f0886efd7ab",
  measurementId: "G-SQ6ER2KHD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
const auth = getAuth(app);


export {auth};
