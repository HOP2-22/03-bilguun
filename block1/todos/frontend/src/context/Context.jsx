import React, { createContext, useState } from "react";

export const User = createContext();

export function NameContext({ children }) {
  const [email, setEmail] = useState(null);
  const [disable, setDisable] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:8029/user/login", {
        email: userInfo.email,
        password: userInfo.password,
      });
      if (res.data.message !== false) {
        navigate(`/`);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <User.Provider value={{ email: email, disable: disable, Login: Login }}>
      {children}
    </User.Provider>
  );
}
