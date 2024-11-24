
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDdK-MbSvw1bN-k_BXyCuylhX0eEUiiRbI",
    authDomain: "e-commerce-8728e.firebaseapp.com",
    projectId: "e-commerce-8728e",
    storageBucket: "e-commerce-8728e.appspot.com",
    messagingSenderId: "401223700453",
    appId: "1:401223700453:web:1a6072a5f8ffcea78ca90c"
  };
  const app =initializeApp(firebaseConfig) ;
  
  export const  auth =getAuth(app);
  export const db=getFirestore(app);