import React from "react";
import { Box, Container } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export const Loading = () => {
  return (
    <Box
    // sx={{
    //   display: "flex",
    //   justifyContent: "center",
    //   height: "20vh",
    //   width: "20vw",
    //   flexDirection: "row",
    // }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "20vh",
          width: "100vw",
          flexDirection: "row",
        }}
      >
        <Box>
          <Box sx={{}}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width="15%" />
            <Skeleton width="10%" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Loading;
