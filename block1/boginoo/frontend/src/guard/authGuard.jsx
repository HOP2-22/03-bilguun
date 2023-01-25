import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const GuardedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = async () => {
      try {
        const userEmail = await axios.get(
          `https://bilguun-boginoo.onrender.com/user/checkUser`
        );
        if (!userEmail.data.exp) {
          navigate("/login");
          return;
        }
      } catch (error) {
        navigate("/login");
      }
    };
    checkUser();
  }, []);
  return children;
};

export default GuardedRoute;
