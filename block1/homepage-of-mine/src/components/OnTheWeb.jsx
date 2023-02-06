import { Box } from "@mui/system";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { ColorModeContext } from "../context/context";
import Github from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";

export const OnTheWeb = () => {
  const { theme } = useContext(ColorModeContext);
  const styles = {
    webs: {
      marginBottom: "10px",
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      color: theme === "white" ? "white" : "black",
    },
    a: {
      textDecoration: "none",
      color: theme === "white" ? "white" : "black",
      marginLeft: "10px",
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
  };
  return (
    <Box>
      <Typography sx={styles.infos} variant="h5">
        On the web
      </Typography>
      <Box sx={styles.webs}>
        <img src={Github} alt="git" />
        <a href="https://github.com/bilguun082" style={styles.a}>
          @bilguun082
        </a>
      </Box>
      <Box sx={styles.webs}>
        <img src={Instagram} alt="git" />
        <a href="https://github.com/bilguun082" style={styles.a}>
          @bilguun.e_29
        </a>
      </Box>
      <Box sx={styles.webs}>
        <img src={Instagram} alt="git" />
        <a href="https://github.com/bilguun082" style={styles.a}>
          @Билгүүн Э.
        </a>
      </Box>
    </Box>
  );
};

export default OnTheWeb;
