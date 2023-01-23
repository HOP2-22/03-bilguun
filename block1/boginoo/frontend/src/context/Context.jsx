import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export const User = createContext();

export function NameContext({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    const getUser = async () => {
      try {
        const userEmail = await axios.get(
          "http://localhost:8029/user/checkUser"
        );
        if (userEmail.data.exp * 1000 <= Date.now()) {
          LogOut();
          return;
        } else setEmail(userEmail.data.email);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  const LogOut = () => {
    setEmail(null);
    Cookies.remove("token");
  };

  const LoginFunc = async () => {
    try {
      const res = await axios.post("http://localhost:8029/user/login", {
        email: user.email,
        password: user.password,
      });
      if (res.data.message !== false) {
        Cookies.set("token", res.data.token);
        setEmail(res.data.email);
        navigate(`/`);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("Password or Email is invalid");
    }
  };

  return (
    <User.Provider
      value={{
        email: email,
        user: user,
        setEmail: setEmail,
        LoginFunc: LoginFunc,
        setUser: setUser,
        LogOut: LogOut,
      }}
    >
      {children}
    </User.Provider>
  );
}
