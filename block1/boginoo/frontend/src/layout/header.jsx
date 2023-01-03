import * as React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";

export const Header = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Typography
          sx={{ fontWeight: "700", color: "#02B589", fontSize: "20px" }}
        >
          Хэрхэн ажилладаг вэ?
        </Typography>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#02B589",
            color: "white",
            width: "183px",
            height: "44px",
            borderRadius: "100px",
          }}
        >
          Нэвтрэх
        </Button>
      </Box>
    </Container>
  );
};

export default Header;
