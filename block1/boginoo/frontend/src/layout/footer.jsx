import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";

export const Footer = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Made with ♥️ by Pinecone Academy</Typography>
        <Typography>©boginoo.io 2022</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
