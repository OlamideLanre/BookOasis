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
        <p>
          {`signed in as ${authUser.email} `}{" "}
          <button onClick={userSignout}>sign out</button>{" "}
        </p>
      ) : (
        <p>signed out</p>
      )}
    </div>
  );
};

export default Authcheck;
