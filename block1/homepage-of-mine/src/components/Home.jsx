import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Profile from "../Bilguun.jpeg";
import Github from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";
export const Home = () => {
  const styles = {
    firstRow: {
      width: "100%",
      height: "100px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    font: {
      fontFamily: "Signika Negative",
    },
    infos: {
      fontFamily: "Signika Negative",
      textDecoration: "underline",
      textUnderlineOffset: "6px",
      textDecorationColor: "#525252",
      textDecorationThickness: "4px",
    },
  };
  return (
    <Container maxWidth="sm">
      <Box>
        <Box sx={styles.firstRow}>
          <Typography sx={styles.font}>Enkh-Amgalan Bilguun</Typography>
          <Box
            sx={{
              width: "70px",
              height: "70px",
              overflow: "hidden",
              borderRadius: "100px",
            }}
          >
            <img src={Profile} alt="profile" width={70} height={70} />
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.infos} variant="h5">
            Bio
          </Typography>
          <Typography sx={styles.font}>
            2006 - born in Ulaanbaatar, Mongolia
          </Typography>
          <Typography sx={styles.font}>
            2021 - Present - Learning as a programmer in Pinecone Academy
          </Typography>
          <Typography sx={styles.infos} variant="h5">
            I♥
          </Typography>
          <Typography sx={styles.font}>
            Music, Basketball, Playing games, Volleyball, Writing code
          </Typography>
          <Typography sx={styles.infos} variant="h5">
            On the web
          </Typography>
          <Box>
            <img src={Github} alt="git" />
            <a
              href="https://github.com/bilguun082"
              style={{ textDecoration: "none", color: "black" }}
            >
              @bilguun082
            </a>
          </Box>
          <Box>
            <img src={Instagram} alt="git" />
            <a
              href="https://github.com/bilguun082"
              style={{ textDecoration: "none", color: "black" }}
            >
              @bilguun.e_29
            </a>
          </Box>
          <Box>
            <img src={Instagram} alt="git" />
            <a
              href="https://github.com/bilguun082"
              style={{ textDecoration: "none", color: "black" }}
            >
              @Билгүүн Э.
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
