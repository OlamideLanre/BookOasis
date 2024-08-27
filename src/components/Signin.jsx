import React, { useState } from "react";
import { useAuth } from "./Authcontext";
import { doSignInWihEmailAndPassword, doSignInWithGoogle } from "../auth";
import { useNavigate, Link } from "react-router-dom";

import book64 from "../assets/book_reading_64px.png";
import googleicon from "../assets/google_48px.png";
// import Modal from "./Modal";
const Signin = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWihEmailAndPassword(email, password).then((res) => {
        console.log(" signed in succesfully ", res);
        navigate("/");
      });
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((error) => {
        setIsSigningIn(false);
      });
    }
  };
  const fgpw = () => {
    setModal({
      isError: true,
      msg: "Better Remember That Password o",
      header: "FORGOT PASSWORD KE !!!",
    });
  };
  return (
    <div>
      {userLoggedIn && navigate("/")}
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
            <form onSubmit={onsubmit} className="space-y-6">
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
                    id="memail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
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
                    autoComplete="current-password"
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
                  className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                >
                  {/* {loading ? <LoadingOutlined /> : "Sign In"} */} Sign In
                </button>
              </div>
              <div>
                <p
                  onClick={onGoogleSignIn}
                  className="btn btn-sm flex w-full justify-center bg-white  font-semibold "
                >
                  <img className="w-4" src={googleicon} alt="googleicon" />{" "}
                  Continue with Google
                </p>
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
        {/* {modal.isError ? (
        <div>
          {" "}
          <Modal modal={modal} />
        </div>
      ) : null} */}
      </div>
    </div>
  );
};

export default Signin;
