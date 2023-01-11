import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
  const [check, setCheck] = useState("");
  const createUser = async () => {
    if (check === userInfo.password) {
      try {
        const res = await axios.post("http://localhost:8029/user/create", {
          email: userInfo.email,
          password: userInfo.password,
        });
        navigate(`/`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
    }
  };
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Group} alt="group" />
          <Typography
            sx={{ fontFamily: "Lobster", fontSize: "56px", color: "#02B589" }}
          >
            Boginoo
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: "40px", color: "#02B589", fontFamily: "Ubuntu" }}
            >
              Бүртгүүлэх
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                marginLeft: "20px",
                fontFamily: "Ubuntu",
              }}
            >
              Цахим хаяг
            </Typography>
            <OutlinedInput
              placeholder="name@mail.domain"
              variant="outlined"
              value={userInfo.email}
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
              sx={{
                width: "381px",
                padding: "0",
                height: "44px",
                marginBottom: "20px",
                borderRadius: "100px",
                fontSize: "20px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginLeft: "20px",
                fontFamily: "Ubuntu",
              }}
            >
              Нууц үг
            </Typography>
            <OutlinedInput
              placeholder="••••••••••"
              variant="outlined"
              value={userInfo.password}
              onChange={(e) => {
                setUserInfo({ ...userInfo, password: e.target.value });
              }}
              sx={{
                width: "381px",
                padding: "0",
                height: "44px",
                marginBottom: "20px",
                borderRadius: "100px",
                fontSize: "20px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginLeft: "20px",
                fontFamily: "Ubuntu",
              }}
            >
              Нууц үг давтах
            </Typography>
            <OutlinedInput
              placeholder="••••••••••"
              variant="outlined"
              value={check}
              onChange={(e) => {
                setCheck(e.target.value);
              }}
              sx={{
                width: "381px",
                padding: "0",
                height: "44px",
                marginBottom: "20px",
                borderRadius: "100px",
                fontSize: "20px",
              }}
            />
            <Button
              onClick={() => {
                createUser();
              }}
              variant="outlined"
              sx={{
                borderRadius: "100px",
                backgroundColor: "#02B589",
                height: "44px",
                fontSize: "20px",
                fontFamily: "Ubuntu",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
