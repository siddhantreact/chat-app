
import {initializeApp } from "firebase/app"

import {getAuth ,signInWithPopup , GoogleAuthProvider} from "firebase/auth"

import {Firestore, getFirestore } from "firebase/firestore"





const firebaseConfig = {
    apiKey: "AIzaSyBqXwCNQF0e3bXdVuyfkUkXn9mcCgHlpeo",
    authDomain: "whatsapp-clone-c36fc.firebaseapp.com",
    projectId: "whatsapp-clone-c36fc",
    storageBucket: "whatsapp-clone-c36fc.appspot.com",
    messagingSenderId: "677714459724",
    appId: "1:677714459724:web:5359cbd2afb084152288e9",
    measurementId: "G-EL66RE4E2R"
  };




 const app = initializeApp(firebaseConfig);

   const provider = new GoogleAuthProvider  //google auth ref








const db = getFirestore(app)

const auth = getAuth()

 


export {app,auth ,db , provider }