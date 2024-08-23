import React from "react";
import { useState } from "react";
import { auth, provider } from "../../Firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import book64 from "../../assets/book_reading_64px.png";
import googleicon from "../../assets/google_48px.png";
import Modal from "../Modal";

const Signup = () => {
  const [isError, setIsError] = useState(false);
  const [msg, setmsg] = useState("");
  const [header, setheader] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  const Signup = (e) => {
    e.preventDefault();

    setIsError(false);
    setmsg("");
    setheader("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredentials) => {
        sendEmailVerification(auth.currentUser).then(() => {
          setIsError(true);
          setmsg(
            `An Email has been sent to ${email}, Please Verify this Email`
          );
          setheader("Notice");
        });
        console.log(useCredentials);
      })
      .catch((error) => {
        console.log(error);
        
    setIsError(true);
    if(error.message==="Firebase: Password should be at least 6 characters (auth/weak-password)."){
      setmsg("Password should be at least 6 characters");
    } else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      setmsg("Email Already in Use");
    }else  {
      setmsg(error.message);
    }
    setheader("An Error Occured");
      });
  };
  const googleSignup = () => {
    setIsError(false); // Reset error state before Google sign-in
    setmsg("");
    setheader("");
    signInWithRedirect(auth, provider)
      .then((useCredentials) => {
        console.log(useCredentials);
      })
      .catch((error) => {
        console.log(error);
        setmsg(error.message);
        setheader("An Error Occured");
        setIsError(true);
      });
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={book64} alt="Book Image" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Signup
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={Signup} className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Sign up
            </button>
          </div>
          <span className="font-bold">- or -</span>
          <div>
            <button
              onClick={googleSignup}
              className="btn btn-sm flex w-full justify-around  font-semibold "
            >
              <img className="w-4" src={googleicon} alt="googleicon" /> Continue
              with Google
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          Already a member?
          <a
            href="#"
            className="font-semibold leading-6 text-green-500 hover:text-green-500"
          >
            {" "}
            Signin Here
          </a>
        </p>
      </div>
      <Modal header={header} isError={isError} msg={msg} />

    </div>
  );
};

export default Signup;
