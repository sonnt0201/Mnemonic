import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWmomrG6ZxrUw8GWLkhOwosRGYlf3aw0g",
  authDomain: "mnemonic-77c70.firebaseapp.com",
  projectId: "mnemonic-77c70",
  storageBucket: "mnemonic-77c70.appspot.com",
  messagingSenderId: "406321260943",
  appId: "1:406321260943:web:5fb4d663190502df84c3fa",
  measurementId: "G-4RVM923GB9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);