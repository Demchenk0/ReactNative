// import * as firebase from 'firebase'
// import 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoiQHEL_1If10ygpIqR7xOG3pp3dZDnGM",
    authDomain: "reactnative-f3010.firebaseapp.com",
    projectId: "reactnative-f3010",
    storageBucket: "reactnative-f3010.appspot.com",
    messagingSenderId: "215399886623",
    appId: "1:215399886623:web:366f7073d58f46ba474a2a",
    measurementId: "G-YH5BGGL8MK"
  };

  // firebase.initializeApp(firebaseConfig)

  // export default firebase;


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);