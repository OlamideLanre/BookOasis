import React from "react";
import { useState } from "react";
import { auth, provider } from "../../Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const Signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredentials) => {
        if (!auth.currentUser.emailVerified) {
          signOut(auth);
          console.log("Please verify your email before signing in.");
        } else {
          console.log("Signed in successfully", userCredentials);
          console.log(useCredentials);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignup = () => {
    signInWithRedirect(auth, provider)
      .then((useCredentials) => {
        console.log(useCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signin">
      <form onSubmit={Signin}>
        <h1>SignIn</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Here"
          value={email}
        />{" "}
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password Here"
          value={password}
        />{" "}
        <br />
        <button type="submit">Sign IN</button>
        <button onClick={googleSignup}>Sign Up with google</button>
      </form>
    </div>
  );
};

export default Signin;
