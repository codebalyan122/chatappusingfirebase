import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhD8qes00KEuiVUvBsXoyuX-cETcjyVRE",
  authDomain: "chatapp-a8230.firebaseapp.com",
  projectId: "chatapp-a8230",
  storageBucket: "chatapp-a8230.appspot.com",
  messagingSenderId: "710409083470",
  appId: "1:710409083470:web:4e67af18d1b90a5f77c11f",
  measurementId: "G-YRKZJC643K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
