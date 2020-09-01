import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAuA5EOHGRgBCN0ojN4K6xcYzh9wsJFtAE",
  authDomain: "crwn-shopping-73c67.firebaseapp.com",
  databaseURL: "https://crwn-shopping-73c67.firebaseio.com",
  projectId: "crwn-shopping-73c67",
  storageBucket: "crwn-shopping-73c67.appspot.com",
  messagingSenderId: "788026353265",
  appId: "1:788026353265:web:3edf15e944fadd46685dd0",
  measurementId: "G-Z9HEFRP6RC",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
