import React from "react";
import { useState } from "react";
import { auth, provider } from "../../Firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  const Signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredentials) => {
        sendEmailVerification(auth.currentUser).then(() => {
            console.log(`an email has been sent to ${email}, please verify this email`)
        })
        console.log(useCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignup = () => {
    signInWithRedirect(auth, provider).then((useCredentials) => {
        console.log(useCredentials);
    }).catch(error => {
        console.log(error)
    })
  }
  return (
    <div className="signup">
      <form onSubmit={Signup}>
        <h1>Signup</h1>
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
        <button type="submit">Sign UP</button> <br />
        <button onClick={googleSignup}>Sign Up with google</button>
      </form>
    </div>
  );
};

export default Signup;
