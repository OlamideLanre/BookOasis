import React, { Children, useContext, useEffect, useState } from "react";
import app from "../App";
import { auth } from "../Firebase";

export const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
