import React from "react";
import { useState } from "react";
import { auth, provider } from "../Firebase";
import { LoadingOutlined } from "@ant-design/icons";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithRedirect,
} from "firebase/auth";
import book64 from "../assets/book_reading_64px.png";
import googleicon from "../assets/google_48px.png";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [msg, setmsg] = useState("");
  const [header, setheader] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    setmsg("");
    setheader("");
    if (!email.includes("@")) {
      setIsError(true);
      setheader("Invalid Email");
      setmsg("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);

        return sendEmailVerification(auth.currentUser);
      })
      .then(() => {
        setIsError(true);
        setheader("Notice");
        setmsg("Please verify your Email Before Signing In");

        setLoading(false);

        // Programmatic navigation after email verification is sent
        navigate("/signin");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);

        setIsError(true);
        setheader("An Error Occurred");

        switch (error.code) {
          case "auth/weak-password":
            setmsg("Password should be at least 6 characters");
            break;
          case "auth/email-already-in-use":
            setmsg("Email Already in Use");
            break;
          default:
            setmsg(error.message);
        }
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
        <form onSubmit={signup} className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
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
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
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
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit" disabled={loading}
              className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              {loading ? <LoadingOutlined /> : "Sign up"}
            </button>
          </div>
          <div>
            <button
              onClick={googleSignup}
              className="btn btn-sm flex w-full bg-white justify-center  font-semibold "
            >
              <img className="w-4" src={googleicon} alt="googleicon" /> Continue
              with Google
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          Already a member?
          <Link
            to="/signin"
            className="font-semibold leading-6 text-green-500 hover:text-green-500"
          >
            Signin Here
          </Link>
        </p>
      </div>
      <Modal header={header} isError={isError} msg={msg} />
    </div>
  );
};

export default Signup;
