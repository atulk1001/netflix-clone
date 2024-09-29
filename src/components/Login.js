import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const dob = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = checkValidateData(email, password, name, dob);
    setErrorMsg(message);
    if (message) return;

    const auth = Auth;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/11676300?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(`${errorCode} ${errorMessage}`);
            });
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
        />
      </div>
      <div className="absolute backdrop-brightness-50 bg-black w-3/12 my-36 rounded-lg p-10 mx-auto right-0 left-0 text-white h-3/4 bg-opacity-70">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-5 p-2 w-full rounded-lg bg-slate-100 text-black"
            />
          )}
          {!isSignIn && (
            <input
              ref={dob}
              type="date"
              placeholder="mm/dd/yyyy"
              className="my-5 p-2 w-full rounded-lg bg-slate-100 text-black"
              required
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="my-5 p-2 w-full rounded-lg bg-slate-100 text-black"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="my-5 p-2 w-full rounded-lg bg-slate-100 text-black"
          />
          <p className="mt-4 text-red-500 font-bold">{errorMsg}</p>
          <button
            className="my-5 p-2 bg-red-500 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {!isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-10 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignIn
            ? "Already registered ?, Sign In Now"
            : "New to netflix ? Sign up Now"}
        </div>
      </div>
    </div>
  );
};

export default Login;
