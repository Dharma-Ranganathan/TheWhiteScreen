import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { fauth } from "../config/firebaseConfig";

export default function useFirebaseAuth() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // sign in with google provider
  const provider = new GoogleAuthProvider();

  async function signUpFirebase(email, password) {
    // console.log(email, password);
    setError(null);
    setIsLoading(true);

    await createUserWithEmailAndPassword(fauth, email, password)
      .then((userCredential) => {
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setIsLoading(false);
      });
  }

  async function signInFirebase(email, password) {
    // console.log(email, password);
    setError(null);
    setIsLoading(true);
    await signInWithEmailAndPassword(fauth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setIsLoading(false);
      });
  }

  async function signUpWithGoogle() {
    setError(null);
    setIsLoading(true);
    await signInWithPopup(fauth, provider)
      .then((result) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
        setError(error.message);
      });
  }

  async function logout() {
    setError(null);
    setIsLoading(true);

    await signOut(fauth)
      .then(() => {
        console.log("signed out success");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
        setError(error.message);
      });
  }

  return {
    signUpFirebase,
    signInFirebase,
    error,
    isLoading,
    signUpWithGoogle,
    logout,
  };
}
