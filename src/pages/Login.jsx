import "../styles/Login.css";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  // updating document title
  useEffect(() => {
    document.title = "Login | The White Screen";
  }, []);

  useEffect(() => {
    const passwordInput = document.querySelector(".password");

    if (showPassword) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }, [showPassword]);

  //hooks
  const { signInFirebase, error, isLoading, signUpWithGoogle } =
    useFirebaseAuth();

  function handleCreds(e) {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }
  // console.log(creds);

  function handleSignIn(e) {
    if (creds.email.trim() == "" || creds.password.trim() == "") {
      return console.log("empty creds");
    }

    // console.log(creds);
    signInFirebase(creds.email, creds.password);
    return;
  }

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form-wrapper">
          <p className="welcome-back">Welcome Back to</p>
          <h3 className="title">The White Screen</h3>
          <div className="input-container">
            <span>
              <MdEmail />
            </span>
            <input
              className="email"
              type="email"
              placeholder="email"
              aria-placeholder="email"
              name="email"
              value={creds.email}
              onChange={handleCreds}
            />
          </div>
          <div className="input-container">
            <span>
              {showPassword ? (
                <FaEye onClick={() => setShowPassword(false)} />
              ) : (
                <FaEyeSlash onClick={() => setShowPassword(true)} />
              )}
            </span>
            <input
              className="password"
              type="password"
              placeholder="password"
              aria-placeholder="password"
              name="password"
              value={creds.password}
              onChange={handleCreds}
            />
          </div>
          <p className="or">(or)</p>
          <div className="google-sign-up" onClick={signUpWithGoogle}>
            <img src="/google-logo.png" alt="google" />
            <span>Sign In with Google</span>
          </div>
          <div className="sign-in">
            <button onClick={handleSignIn} disabled={isLoading}>
              Login
            </button>
          </div>
          {error && (
            <div className="error-message">
              <p>Error Message: Invalid User Credentails</p>
            </div>
          )}

          <div className="no-account">
            <p>don't have an account?</p>
            <Link className="sign-up" to={"/sign-up"}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
