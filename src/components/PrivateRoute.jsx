import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
const PrivateRoute = ({ component}) => {
  const { currentUser } = useAuth;

  if (!currentUser) {
    // If user is not authenticated, redirect to sign-in page
    return <Navigate to="/signin" />;
  }

  // If user is authenticated, render the children components
  return children;
  // return (
  //   <Route
  //     {...rest}
  //     render={(routeProps) =>
  //       !!currentUser ? (
  //         <RouteComponent {...routeProps} />
  //       ) : (
  //         <Navigate to={"/login"} />
  //       )
  //     }
  //   />
  // );
};

export default PrivateRoute;
