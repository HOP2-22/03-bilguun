import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export const Header = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography sx={{ fontFamily: "Signika Negative" }}>
          Enkh-Amgalan Bilguun
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
