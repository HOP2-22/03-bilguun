import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
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
              sx={{ width: "30vw", padding: "0" }}
            />
            <Typography sx={{}}>Нууц үг</Typography>
            <TextField
              id="outlined-basic"
              label=".........."
              variant="outlined"
              sx={{ width: "30vw", padding: "0" }}
            />
            <Box>
              <input type="checkbox" name="" id="" />
              <Typography>Нууц үгээ мартсан</Typography>
            </Box>
            <Typography>
              <a href="/signup">Бүртгүүлэх</a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
