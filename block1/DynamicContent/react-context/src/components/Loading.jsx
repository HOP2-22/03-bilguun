import React from "react";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import { Box, Container } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <LoopOutlinedIcon />
      </Container>
    </Box>
  );
};

export default Loading;
