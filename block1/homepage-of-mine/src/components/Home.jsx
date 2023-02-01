import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Profile from "../Bilguun.jpeg";
import Github from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";
import { ColorModeContext } from "../context/context";
import Lottie from "lottie-react";
import CodingBoyAnimation from "../assets/95348-coding-boy.json";
// import { ThreeJS } from "../components/three";
export const Home = () => {
  const { theme } = useContext(ColorModeContext);
  const styles = {
    firstRow: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginBottom: "40px",
    },
    font: {
      fontFamily: "Signika Negative",
      color: theme === "white" ? "white" : "black",
    },
    infos: {
      fontFamily: "Signika Negative",
      textDecoration: "underline",
      textUnderlineOffset: "6px",
      textDecorationColor: "#525252",
      textDecorationThickness: "4px",
      color: theme === "white" ? "white" : "black",
    },
    webs: {
      marginBottom: "10px",
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      color: theme === "white" ? "white" : "black",
    },
    body: {
      width: "100%",
      height: "100vh",
      backgroundColor: theme === "white" ? "black" : "white",
    },
    portfolio: {
      fontFamily: "Signika Negative",
      color: theme === "white" ? "white" : "black",
      fontSize: "25px",
    },
  };
  return (
    <Box sx={styles.body}>
      <Container maxWidth="sm">
        <Box>
          {/* <ThreeJS /> */}
          <Lottie animationData={CodingBoyAnimation} loop={true} />
          <Box sx={styles.firstRow}>
            <Box>
              <Typography sx={styles.portfolio}>
                Enkh-Amgalan Bilguun
              </Typography>
              <Typography sx={styles.font}>Student of Pinecone</Typography>
            </Box>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                overflow: "hidden",
                borderRadius: "100px",
                border:
                  theme === "white" ? "1px solid white" : "1px solid black",
              }}
            >
              <img src={Profile} alt="profile" width={70} height={70} />
            </Box>
          </Box>
          <Box>
            <Box sx={{ marginBottom: "40px" }}>
              <Typography sx={styles.infos} variant="h5">
                Bio
              </Typography>
              <Typography sx={styles.font}>
                2006 - born in Ulaanbaatar, Mongolia
              </Typography>
              <Typography sx={styles.font}>
                2021 - Present - Learning as a programmer in Pinecone Academy
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "40px" }}>
              <Typography sx={styles.infos} variant="h5">
                I♥
              </Typography>
              <Typography sx={styles.font}>
                Music, Basketball, Playing games, Volleyball, Writing code
              </Typography>
            </Box>
            <Typography sx={styles.infos} variant="h5">
              On the web
            </Typography>
            <Box sx={styles.webs}>
              <img src={Github} alt="git" />
              <a
                href="https://github.com/bilguun082"
                style={{
                  textDecoration: "none",
                  color: theme === "white" ? "white" : "black",
                  marginLeft: "10px",
                }}
              >
                @bilguun082
              </a>
            </Box>
            <Box sx={styles.webs}>
              <img src={Instagram} alt="git" />
              <a
                href="https://github.com/bilguun082"
                style={{
                  textDecoration: "none",
                  color: theme === "white" ? "white" : "black",
                  marginLeft: "10px",
                }}
              >
                @bilguun.e_29
              </a>
            </Box>
            <Box sx={styles.webs}>
              <img src={Instagram} alt="git" />
              <a
                href="https://github.com/bilguun082"
                style={{
                  textDecoration: "none",
                  color: theme === "white" ? "white" : "black",
                  marginLeft: "10px",
                }}
              >
                @Билгүүн Э.
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
