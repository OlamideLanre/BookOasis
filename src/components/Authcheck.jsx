import React from "react";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, getRedirectResult } from "firebase/auth";
import { auth } from "../Firebase";
const Authcheck = () => {
  const [authUser, setauthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthUser(user);
      } else {
        setauthUser(null);
      }
    });

    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setAuthUser(result.user);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => listen();
  }, []);
  getRedirectResult(auth)
    .then((result) => {
      if (result?.user) {
        setAuthUser(result.user);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out succesfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu flex flex-col gap-2 items-center justify-between menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                  <p className="font-semibold max-w-45 p-2 rounded-md text-center inline h-max bg-blue-100 break-all break-words">
                    akinsholakinniyioluwarotimi@gmail.com
                  </p>
                <li>
                  <a onClick={userSignout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        // <p>
        //   {`signed in as ${authUser.email} `}
        //   <button onClick={userSignout}>sign out</button>{" "}
        // </p>
        <p>signed out</p>
      )}
    </div>
  );
};

export default Authcheck;
