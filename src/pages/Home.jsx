import React from 'react'
import { auth } from "../Firebase";

const Home = () => {
  return (
    <div>
        <p>Welcome {authUser.displayName}</p>
          <img
            src={authUser.photoURL || "path/to/default/image.png"}
            alt="Profile"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <button onClick={userSignout}>Sign out</button>    </div>
  )
}

export default Home
