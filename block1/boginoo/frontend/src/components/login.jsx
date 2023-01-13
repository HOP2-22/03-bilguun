import Button from "@mui/material/Button";
import { useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { OutlinedInput } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";
import { useNavigate } from "react-router-dom";
import { User } from "../context/Context";

export const Login = () => {
  const { user, setUser, LoginFunc } = useContext(User);
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
            <Typography sx={{ fontSize: "40px", color: "#02B589" }}>
              Нэвтрэх
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
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
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
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" name="" id="" />
                <Typography sx={{ color: "#02B589" }}>Намайг сана</Typography>
              </Box>
              <Typography>
                <a href="/">Нууц үг мартсан</a>
              </Typography>
            </Box>
            <Button
              variant="outlined"
              onClick={() => {
                LoginFunc();
              }}
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
              Нэвтрэх
            </Button>
            <Typography>
              <a href="/signup">Шинэ хэрэглэгч бол энд дарна уу</a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
