import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";
import book64 from "../assets/book_reading_64px.png";
import Modal from "./Modal";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from "../auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Signup = () => {
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    isError: false,
    msg: "",
    header: "",
  });

  const onsubmit = async (e) => {
    e.preventDefault();

    if (!isRegistering) {
      setIsRegistering(true);
      setLoading(true);
      await doCreateUserWithEmailAndPassword(email, password)
        .then(() => {
          doSendEmailVerification(auth.currentUser);
          signOut(auth).then(() => {
            navigate("/signin");
          });
        })
        .catch((err) => {
          setIsRegistering(false);
          setLoading(false);
          setModal({
            isError: true,
            msg: err.message,
            header: "AN ERROR OCCURED",
          });
        });
    }
  };
  const closeModal = () => {
    setModal({
      isError: false,
      msg: "",
      header: "",
    });
  };
  return (
    <div>
      {userLoggedIn && navigate("/")}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={book64} alt="Book Image" />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Signup
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={onsubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
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
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                {loading ? <LoadingOutlined /> : "Sign up"}
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
        {modal.isError ? (
          <div>
            <Modal modal={modal} onClose={closeModal} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Signup;
