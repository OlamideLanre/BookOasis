import React from "react";
import { useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import book64 from "../assets/book_reading_64px.png";
import googleicon from "../assets/google_48px.png";
import Modal from "./Modal";
const Signin = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [msg, setmsg] = useState("");
  const [header, setheader] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Signin = (e) => {
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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (!auth.currentUser.emailVerified) {
          signOut(auth);
          setIsError(true);
          setheader("Notice");
          setmsg("Please verify your email before signing in.");
          setLoading(false);
        } else {
          const user = userCredential.user;
          console.log("Signed in successfully", userCredential);
          navigate("/cart");
          console.log(userCredential);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setmsg("Email and password do not match");
        } else {
          setmsg(error.message);
        }
        setheader("An Error Occured");
        setIsError(true);
      });
  };

  const googleSignup = () => {
    setLoading(true);
    setIsError(false); // Reset error state before Google sign-in
    setmsg("");
    setheader("");

    signInWithRedirect(auth, provider).catch((error) => {
      setmsg(error.message);
      setheader("An Error Occurred");
      setIsError(true);
      setLoading(false);
    });
  };

  // Use useEffect to handle the result after redirect
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log(result);
          navigate("/cart"); // Navigate after successful sign-in
        }
      })
      .catch((error) => {
        setmsg(error.message);
        setheader("An Error Occurred");
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [auth, navigate]);
  const fgpw = () => {
    setmsg("Better Remember That Password o");
    setheader("FORGOT PASSWORD KE !!!");
    setIsError(true);
  };

  return (
    <div className="signin">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={book64}
            alt="My bookbigng"
          />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={Signin}
            className="space-y-6"
            action="#"
            method="POST"
          >
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
                  id="memail"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div onClick={fgpw} className="text-sm">
                  <a className="font-semibold text-green-500 hover:text-green-500">
                    Forgot password?
                    {/* better remeber it  */}
                  </a>
                </div>
              </div>
              <div>
                <input
                  id="mpassword"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                {loading ? <LoadingOutlined /> : "Sign In"}
              </button>
            </div>
            <div>
              <button
                onClick={googleSignup}
                className="btn btn-sm flex w-full justify-center bg-white  font-semibold "
              >
                <img className="w-4" src={googleicon} alt="googleicon" />{" "}
                Continue with Google
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/signup"
              className="font-semibold leading-6 text-green-500 hover:text-green-500"
            >
              Signup Here
            </Link>
          </p>
        </div>
      </div>
      {isError ? (
        <div>
          {" "}
          <Modal header={header} isError={isError} msg={msg} />
        </div>
      ) : null}
    </div>
  );
};

export default Signin;
