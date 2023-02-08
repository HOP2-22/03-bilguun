import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Profile from "../Bilguun.jpeg";
import { ColorModeContext } from "../context/context";
import { Bio } from "./Bio";
import { OnTheWeb } from "./OnTheWeb";
import { Box } from "@mui/system";
import { Bird } from "./Bird";
import Aos from "aos";
import "aos/dist/aos.css";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const Home = () => {
  const { theme } = useContext(ColorModeContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const styles = {
    firstRow: {
      width: "100%",
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
      marginBottom: "20px",
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
      backgroundColor: theme === "white" ? "black" : "white",
    },
    portfolio: {
      fontFamily: "Signika Negative",
      color: theme === "white" ? "white" : "black",
      fontSize: "25px",
    },
    pic: {
      width: "70px",
      height: "70px",
      overflow: "hidden",
      borderRadius: "100px",
      border: theme === "white" ? "1px solid white" : "1px solid black",
    },
  };
  return (
    <Box sx={styles.body}>
      <Container maxWidth="sm">
        <Box>
          <Bird data-aos="fade-up" />
          <Box
            data-aos="fade-up"
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderRadius: "100px",
              marginTop: "-80px",
            }}
          >
            Hello, I&apos;m an indie app developer based in Mongolia!
          </Box>
          <Box sx={styles.firstRow} data-aos="fade-up">
            <Box>
              <Typography sx={styles.portfolio}>
                Enkh-Amgalan Bilguun
              </Typography>
              <Typography sx={styles.font}>Student of Pinecone</Typography>
            </Box>
            <Box sx={styles.pic}>
              <img src={Profile} alt="profile" width={70} height={70} />
            </Box>
          </Box>
          <Box data-aos="fade-up">
            <Bio />
            <Box sx={{ marginBottom: "40px" }}>
              <Typography sx={styles.infos} variant="h5">
                I♥
              </Typography>
              <Typography sx={styles.font}>
                Music, Basketball, Playing games, Volleyball, Writing code
              </Typography>
            </Box>
            <OnTheWeb />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
