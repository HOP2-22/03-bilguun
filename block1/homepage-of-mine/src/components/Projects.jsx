import { Typography } from "@mui/material";
import { useContext } from "react";
import { Box } from "@mui/system";
import { ColorModeContext } from "../context/context";
import RocketPocket from "../assets/RocketPocket.png";

export const Projects = () => {
  const { theme } = useContext(ColorModeContext);
  const styles = {
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
  };
  return (
    <Box>
      <Typography sx={styles.infos} variant="h5">
        Projects
      </Typography>
      <Box>
        <Box>
          <img src={RocketPocket} alt="rocket" />
        </Box>
      </Box>
    </Box>
  );
};
