import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
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
const gProvider = new GoogleAuthProvider();
gProvider.addScope('profile');
gProvider.addScope('email');
export const signIn = async ({ email, password }) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {}
};

export const signOutApp = async () => {
  try {
    signOut(auth);
  } catch (error) {}
};

export const signUp = async ({ email, password }) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
};

export const signInWithGoogle = async () => {
  try {
    // const link = gProvider.
    // window.location.replace("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=406321260943-1ahlbtpvmat69o1ei4hqa86atlf3sqo5.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmnemonic-77c70.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDn0ppo6ltdYjHyq4fzwNKCFY271mdxszMw-81mRLMnhzOQ1fnSA3VWU2i0A_JeDeYNWi70aHd2kdaMjuwjTyt2pMrSANhHVGVA-3L2Iqad3XD652sMisZZ25fNU9M8FIK8ypTIuBoy9QlHXii3rUx6n60h8E65ccr_GPbqwjYzZv1p_Kd_eF_FWp6OR7A68pIJyQAZLyuY8wEzn5lWDDexRNDmD7g9ZYofM0Jst0lDfSc_Ui_jOJG_FsCkdi40xuSX2ompiMPBTQbcouI25IWWqxdcJk8qomkRSWf57199t3-5NcfyPf-ZZ0hSGjWqvcUijqBPn&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts.readonly&context_uri=http%3A%2F%2Flocalhost%3A3000&service=lso&o2v=1&flowName=GeneralOAuthFlow")
    // signInWithRedirect(auth, gProvider);
  
  } catch (error) {
    alert(error.message)
  }
};
