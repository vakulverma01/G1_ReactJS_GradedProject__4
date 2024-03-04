import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyACalO8S0HKtogjgjswZnioopFPemZXEF0",
  authDomain: "movies-on-the-tip-738b7.firebaseapp.com",
  projectId: "movies-on-the-tip-738b7",
  storageBucket: "movies-on-the-tip-738b7.appspot.com",
  messagingSenderId: "333642047753",
  appId: "1:333642047753:web:2d8184e14051d2420c33d8",
  measurementId: "G-JX9M6HH5PJ"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth();
