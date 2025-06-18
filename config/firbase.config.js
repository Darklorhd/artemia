// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "artemia-8de7b.firebaseapp.com",
  projectId: "artemia-8de7b",
  storageBucket: "artemia-8de7b.firebasestorage.app",
  messagingSenderId: "704757798793",
  appId: "1:704757798793:web:edcd66d708027a1ddbb358"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}