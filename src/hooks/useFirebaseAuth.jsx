import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext, useState } from "react";
import { fauth } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function useFirebaseAuth() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //navigate
  const navigate = useNavigate();
  // auth context
  const { dispatch } = useContext(AuthContext);

  async function signUpFirebase(email, password) {
    // console.log(email, password);
    setError(null);
    setIsLoading(true);

    await createUserWithEmailAndPassword(fauth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          dispatch({ type: "LOGIN", payload: user });
          setIsLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: "LOGIN", payload: null });

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
        const user = userCredential.user;
        if (user) {
          dispatch({ type: "LOGIN", payload: user });
          setIsLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: "LOGIN", payload: null });

        setError(error.message);
        setIsLoading(false);
      });
  }

  // sign in with google provider
  const provider = new GoogleAuthProvider();
  async function signUpWithGoogle() {
    setError(null);
    setIsLoading(true);
    await signInWithPopup(fauth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          dispatch({ type: "LOGIN", payload: user });
          setIsLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: "LOGIN", payload: null });

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
        dispatch({ type: "LOGOUT" });

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
