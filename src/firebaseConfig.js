import firebase from "firebase";
import firebaseApp from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDSKVRh2xRmR-nMFr7acNP5MaRZeo0IKz0",
  authDomain: "evdev-portfolio.firebaseapp.com",
  projectId: "evdev-portfolio",
  storageBucket: "evdev-portfolio.appspot.com",
  messagingSenderId: "284194909252",
  appId: "1:284194909252:web:adcea68320cc44140a6011",
  measurementId: "G-7V27P4R006",
};
firebaseApp.initializeApp(firebaseConfig);
export const firebaseAnalitics = firebase.analytics();
export const firebaseDb = firebaseApp.firestore();
