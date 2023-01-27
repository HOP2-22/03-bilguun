import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";
import { User } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../css/boginoo.css";
import Lottie from "lottie-react";
import Loading from "../assets/99274-loading.json";

export const History = () => {
  const { email } = useContext(User);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        console.log(loading);
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
        {loading ? <Lottie animationData={Loading} loop={true} /> : null}
        {data?.map((e, index) => {
          return (
            <div className="shortened-container" key={index}>
              <div className="shortened-container">
                <p className="word2">Өгөгдсөн холбоос:</p>
                <p className="link">{e?.original}</p>
              </div>
              <div>
                <p className="word2">Богино холбоос:</p>
                <div className="link-short">
                  <p>
                    <a href={`${e?.short}`} className="link">
                      https://boginoo-eed24.web.app/{`${e?.short}`}
                    </a>
                  </p>
                  <CopyToClipboard
                    text={`https://boginoo-eed24.web.app/${e?.short}`}
                  >
                    <button
                      style={{
                        width: "100px",
                        height: "30px",
                        border: "none",
                        borderRadius: "100px",
                      }}
                    >
                      Хуулж авах
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          );
        })}
      </Box>
    </Container>
  );
};

export default History;
