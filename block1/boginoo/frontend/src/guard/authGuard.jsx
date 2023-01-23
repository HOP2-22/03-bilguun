import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const GuardedRoute = ({ children }) => {
  const checkUser = async () => {
    const userEmail = await axios.get("http://localhost:8029/user/checkUser");
    console.log(userEmail.data);
    if (userEmail.data.exp * 1000 <= Date.now()) {
      return <Navigate to="/login" replace />;
    }
  };
  return children;
};

export default GuardedRoute;
