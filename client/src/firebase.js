// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBeoIc7-7Z4Z4rQJ-XSJD6z7ahYbzjeJs",
  authDomain: "concert-app-a522c.firebaseapp.com",
  projectId: "concert-app-a522c",
  storageBucket: "concert-app-a522c.appspot.com",
  messagingSenderId: "1076385692930",
  appId: "1:1076385692930:web:fac0a6f93d2a5d6780161b",
  measurementId: "G-8L5WT8SQYZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
