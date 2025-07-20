import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_OXr7Fwy7RjEOdY8R7SIenp7VysfA5k",
  authDomain: "thewhitescreen-2ac59.firebaseapp.com",
  projectId: "thewhitescreen-2ac59",
  storageBucket: "thewhitescreen-2ac59.firebasestorage.app",
  messagingSenderId: "505544978905",
  appId: "1:505544978905:web:1e9f85617af528400529c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fdb = getFirestore(app);
