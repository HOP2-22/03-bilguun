import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";
import { useNavigate } from "react-router-dom";

export const Boginoo = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const createData = async () => {
    let random = (Math.random() + 1).toString(36).substring(7);
    console.log(random);
    try {
      const res = await axios.post("http://localhost:8029/short/create", {
        original: value,
        short: random,
      });
      console.log(res);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8029/short");
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="https://www.web-huudas.mn"
            variant="outlined"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            sx={{ width: "30%", padding: "0" }}
          />
          <Button
            variant="outlined"
            height={44}
            onClick={() => {
              createData();
              navigate(`/shortened`);
            }}
            sx={{
              backgroundColor: "#02B589",
              color: "white",
              height: "55px",
              borderRadius: "100px",
            }}
          >
            Богиносгох
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Boginoo;
