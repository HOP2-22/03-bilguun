import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";
import { User } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const History = () => {
  const { email } = useContext(User);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      if (!email) return;
      try {
        const { data } = await axios.get(
          `https://bilguun-boginoo.onrender.com/short/user/${email}`
        );
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [email]);
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
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
        {data?.map((e, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "50vw",
                height: "80px",
              }}
              key={index}
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
                  {e?.original}
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
                      href={`${e?.short}`}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontFamily: "Ubuntu",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "23px",
                      }}
                    >
                      {`https://boginoo-eed24.web.app/${e?.short}`}
                    </a>
                  </Typography>
                  <CopyToClipboard
                    text={`https://boginoo-eed24.web.app/${e?.short}`}
                  >
                    <p style={{ textDecoration: "1px solid black" }}>
                      Хуулж авах
                    </p>
                  </CopyToClipboard>
                </Box>
              </Box>
            </div>
          );
        })}
      </Box>
    </Container>
  );
};

export default History;
