import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const User = createContext();

export function NameContext({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const LoginFunc = async () => {
    try {
      const res = await axios.post("http://localhost:8029/user/login", {
        email: user.email,
        password: user.password,
      });
      if (res.data.message !== false) {
        setDisable(true);
        setEmail(res.data.user.email);
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
        LoginFunc: LoginFunc,
        setUser: setUser,
      }}
    >
      {children}
    </User.Provider>
  );
}
