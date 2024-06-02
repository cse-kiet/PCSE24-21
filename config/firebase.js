// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUSEV08m6DAb4ghy6KBjz7qfic92YUCPU",
  authDomain: "investify-85702.firebaseapp.com",
  projectId: "investify-85702",
  storageBucket: "investify-85702.appspot.com",
  messagingSenderId: "268673446257",
  appId: "1:268673446257:web:1be18cddd40ff99e4106d0",
  measurementId: "G-J4DKLT8YBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);