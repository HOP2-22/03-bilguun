import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export const User = createContext();

export function NameContext({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);
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

  const LoginFunc = async () => {
    try {
      const res = await axios.post("http://localhost:8029/user/login", {
        email: user.email,
        password: user.password,
      });
      if (res.data.message !== false) {
        Cookies.set("token", res.data.token);
        Coolies.set("user", res.data.email);
        setDisable(true);
        setEmail(res.data.email);
        navigate(`/`);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <User.Provider
      value={{
        email: email,
        disable: disable,
        user: user,
        setEmail: setEmail,
        LoginFunc: LoginFunc,
        setUser: setUser,
      }}
    >
      {children}
    </User.Provider>
  );
}
