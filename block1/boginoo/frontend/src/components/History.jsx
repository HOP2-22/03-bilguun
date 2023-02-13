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
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const History = () => {
  const { email } = useContext(User);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(1);
  const [files, setFiles] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      if (!email) return;
      try {
        const { data } = await axios.get(
          `https://bilguun-boginoo.onrender.com/short/user/${email}`
        );
        setFiles(data.data.length);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [email, data]);

  useEffect(() => {
    const Page = async () => {
      if (!email) return;
      try {
        const res = await axios.get(
          `https://bilguun-boginoo.onrender.com/short/${email}/${number}/2`
        );
        console.log("test");
        setData(res.data.posts);
      } catch (e) {
        console.log(e);
      }
    };
    Page();
  }, [number, email]);
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
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(files / 2)}
            onChange={(e, value) => {
              console.log(value);
              setNumber(value);
            }}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
              />
            )}
            color="primary"
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default History;
