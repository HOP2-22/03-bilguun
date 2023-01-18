import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { User } from "../context/Context";

const GuardedRoute = ({ children }) => {
  const { email } = useContext(User);
  if (!email) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default GuardedRoute;
