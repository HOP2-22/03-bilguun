import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { User } from "../context/Context";
import Group from "../assets/Group.svg";
import { OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Boginoo = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [short, setShort] = useState(false);
  const [valid, setValid] = useState(false);
  let link = data.slice(-1);
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  const { email } = useContext(User);
  const navigate = useNavigate();
  // window.location.reload();
  const createData = async () => {
    let random = (Math.random() + 1).toString(36).substring(7);
    console.log(random);
    if (email === "") {
      try {
        const res = await axios.post(
          `https://bilguun-boginoo.onrender.com/short/create`,
          {
            original: value,
            short: random,
          }
        );
        console.log(res);
        setValue("");
        setShort(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post(
          `https://bilguun-boginoo.onrender.com/short/create`,
          {
            original: value,
            short: random,
            user: email,
          }
        );
        console.log(res);
        setValue("");
        setShort(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://bilguun-boginoo.onrender.com/short`
        );
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
          height: "75vh",
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
          onClick={() => {
            navigate(`/`);
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
              width: "381px",
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
            onClick={() => {
              let checkUrl = isValidUrl(value);
              if (checkUrl) {
                createData();
              } else {
                setValid(true);
              }
            }}
            sx={{
              backgroundColor: "#02B589",
              color: "white",
              height: "55px",
              borderRadius: "100px",
              fontFamily: "Ubuntu",
            }}
          >
            Богиносгох
          </Button>
        </Box>
        {valid ? (
          <div style={{ color: "red", fontSize: "15px", fontFamily: "Ubuntu" }}>
            Url is not valid
          </div>
        ) : null}
        {short ? (
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
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
                  flexWrap: "wrap",
                  width: "50vw",
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
                    fontSize: "15px",
                    lineHeight: "23px",
                  }}
                >
                  {link[0]?.original}
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>
                    <a
                      href={`${link[0]?.short}`}
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
                      https://boginoo-eed24.web.app/{`${link[0]?.short}`}
                    </a>
                  </Typography>
                  <CopyToClipboard
                    text={`https://boginoo-eed24.web.app/${link[0]?.short}`}
                  >
                    <p style={{ textDecoration: "1px solid black" }}>
                      Хуулж авах
                    </p>
                  </CopyToClipboard>
                </Box>
              </Box>
            </div>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
};

export default Boginoo;
