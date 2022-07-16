// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO-ZPxufeXK2uQ17ID_ltfKFzlvHQQsw0",
  authDomain: "react-z2h.firebaseapp.com",
  projectId: "react-z2h",
  storageBucket: "react-z2h.appspot.com",
  messagingSenderId: "944584164558",
  appId: "1:944584164558:web:2e1f17ff58f648c619bc9f",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
