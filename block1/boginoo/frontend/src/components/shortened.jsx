import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { OutlinedInput } from "@mui/material";
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
          <OutlinedInput
            placeholder="name@mail.domain"
            variant="outlined"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            sx={{
              width: "381",
              padding: "0",
              height: "44px",
              borderRadius: "100px",
              fontFamily: "Ubuntu",
              fontSize: "20px",
            }}
          />
          <Button
            variant="outlined"
            height={44}
            sx={{
              backgroundColor: "#02B589",
              color: "white",
              height: "55px",
              borderRadius: "100px",
              fontFamily: "Ubuntu",
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
                  justifyContent: "space-between",
                  gap: "50px",
                  width: "50vw",
                  height: "80px",
                  borderBottom: "1px solid grey",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "18px",
                      color: "grey",
                    }}
                  >
                    Өгөгдсөн холбоос:
                  </Typography>
                  <Typography
                    sx={{
                      color: "black",
                      textDecoration: "none",
                      fontFamily: "Ubuntu",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "23px",
                    }}
                  >
                    {e.original}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "18px",
                      color: "grey",
                    }}
                  >
                    Богино холбоос:
                  </Typography>
                  <Typography>
                    <a
                      href={`${e.short}`}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontFamily: "Ubuntu",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "23px",
                      }}
                    >
                      http://localhost:3000/{e.short}
                    </a>
                  </Typography>
                </Box>
              </div>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Shortened;
