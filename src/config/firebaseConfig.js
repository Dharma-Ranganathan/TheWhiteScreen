import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "<secret>",
  authDomain: "<secret>",
  projectId: "<secret>",
  storageBucket: "<secret>",
  messagingSenderId: "<secret>",
  appId: "<secret>",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fdb = getFirestore(app);
export const fauth = getAuth();
