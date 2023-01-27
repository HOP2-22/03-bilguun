import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [check, setCheck] = useState("");
  const createUser = async () => {
    if (check === userInfo.password) {
      try {
        const res = await axios.post(
          "https://bilguun-boginoo.onrender.com/user/create",
          {
            email: userInfo.email,
            password: userInfo.password,
          }
        );
        navigate(`/login`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
      setError(true);
    }
  };
  return (
    <div className="container-login">
      <div
        className="logo-container"
        onClick={() => {
          navigate(`/`);
        }}
      >
        <img src={Group} alt="group" />
        <p
          style={{
            fontFamily: "Lobster",
            fontSize: "56px",
            color: "#02B589",
          }}
        >
          Boginoo
        </p>
      </div>
      <form
        onSubmit={(e) => {
          createUser();
          e.preventDefault();
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "38px",
              color: "#02B589",
              fontFamily: "Ubuntu",
              marginLeft: "10px",
            }}
          >
            Бүртгүүлэх
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              fontFamily: "Ubuntu",
            }}
          >
            Цахим хаяг
          </p>
          <input
            placeholder="name@mail.domain"
            variant="outlined"
            value={userInfo.email}
            type="email"
            required
            className="input"
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
          />
          <p
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              fontFamily: "Ubuntu",
            }}
          >
            Нууц үг
          </p>
          <input
            placeholder="••••••••••"
            variant="outlined"
            required
            type="password"
            value={userInfo.password}
            className="input"
            onChange={(e) => {
              setUserInfo({ ...userInfo, password: e.target.value });
            }}
          />
          <p
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              fontFamily: "Ubuntu",
            }}
          >
            Нууц үг давтах
          </p>
          <input
            placeholder="••••••••••"
            required
            variant="outlined"
            type="password"
            value={check}
            className="input"
            onChange={(e) => {
              setCheck(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            style={{
              borderRadius: "100px",
              backgroundColor: "#02B589",
              height: "44px",
              fontSize: "20px",
              fontFamily: "Ubuntu",
              color: "white",
              marginTop: "20px",
            }}
          >
            Sign Up
          </Button>
          {error ? <p>Нууц үг таарахгүй байна</p> : null}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
