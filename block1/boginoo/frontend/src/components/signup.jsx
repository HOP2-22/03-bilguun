import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
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
          description: userInfo.password,
        });
        console.log(res);
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
          <Box>
            <Typography sx={{ fontSize: "56px", color: "#02B589" }}>
              Нэвтрэх
            </Typography>
            <Typography sx={{}}>Цахим хаяг</Typography>
            <TextField
              id="outlined-basic"
              label="unknown@gmail.com"
              variant="outlined"
              value={userInfo.email}
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
              sx={{ width: "30vw", padding: "0" }}
            />
            <Typography sx={{}}>Нууц үг</Typography>
            <TextField
              id="outlined-basic"
              label=".........."
              variant="outlined"
              value={userInfo.password}
              onChange={(e) => {
                setUserInfo({ ...userInfo, password: e.target.value });
              }}
              sx={{ width: "30vw", padding: "0" }}
            />
            <Typography sx={{}}>Нууц үг давтах</Typography>
            <TextField
              id="outlined-basic"
              label=".........."
              variant="outlined"
              value={check}
              onChange={(e) => {
                setCheck(e.target.value);
              }}
              sx={{ width: "30vw", padding: "0" }}
            />
            <Button
              onClick={() => {
                createUser();
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
