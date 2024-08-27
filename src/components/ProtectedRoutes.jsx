import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

const PrivateRoute = ({children }) => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/signin");
    }
  }, [userLoggedIn, navigate]);

  return userLoggedIn ? children : null;
};

export default PrivateRoute;
