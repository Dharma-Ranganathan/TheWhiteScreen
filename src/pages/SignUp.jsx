import "../styles/SignUp.css";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  // updating document title
  useEffect(() => {
    document.title = "Sign Up | The White Screen";
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
  const { signUpFirebase, error, isLoading, signUpWithGoogle } =
    useFirebaseAuth();

  function handleCreds(e) {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }
  // console.log(creds);

  function handleSignUp() {
    signUpFirebase(creds.email, creds.password);
    setCreds({
      email: "",
      password: "",
    });
    return;
  }

  function handleGoogleSignUp() {
    signUpWithGoogle();
    return;
  }

  return (
    <div className="signup-page">
      <div className="form-container">
        <div className="form-wrapper">
          <p className="welcome-back">Welcome to</p>
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
          <div className="google-sign-up" onClick={handleGoogleSignUp}>
            <img src="/google-logo.png" alt="google" />
            <span>Sign Up with Google</span>
          </div>
          <div className="sign-up">
            <button onClick={handleSignUp} disabled={isLoading}>
              Register
            </button>
          </div>
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          <div className="no-account">
            <p>Already have an account?</p>
            <Link className="sign-in" to={"/login"}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
