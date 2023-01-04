import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";
import Group from "../assets/Group.svg";

export const Shortened = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const createData = async () => {
    let random = (Math.random() + 1).toString(36).substring(7);
    console.log(random);
    try {
      const res = await axios.post("http://localhost:8029/short/create", {
        original: value,
        short: random,
      });
      const temp = [...res.data, data];
      setData(temp);
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
  console.log(data);
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
            sx={{
              backgroundColor: "#02B589",
              color: "white",
              height: "55px",
              borderRadius: "100px",
            }}
            onClick={() => createData()}
          >
            Богиносгох
          </Button>
        </Box>
        <Box>
          {data?.map((e, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  width: "50vw",
                }}
              >
                <p>Өгөгдсөн холбоос: {e.original}</p>
                <p>
                  Богино холбоос:{" "}
                  <a href={`${e.short}`}>http://localhost/3000/{e.short}</a>
                </p>
              </div>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Shortened;
