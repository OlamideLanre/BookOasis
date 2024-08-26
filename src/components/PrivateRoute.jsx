import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Navigate to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
