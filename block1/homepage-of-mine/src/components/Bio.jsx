import { Box } from "@mui/system";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { ColorModeContext } from "../context/context";

export const Bio = () => {
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
  );
};

export default Bio;
