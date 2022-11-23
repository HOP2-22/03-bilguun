import * as React from "react";
import { Box } from "@mui/material";

export const Gifs = ({ useGifs }) => {
  return (
    <Box
      sx={{
        width: "400px",
        height: "400px",
        border: "3px solid black",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{useGifs?.title}</p>
      <img
        src={useGifs?.images?.fixed_height.url}
        alt="gif"
        width={300}
        height={300}
      />
    </Box>
  );
};

export default Gifs;
