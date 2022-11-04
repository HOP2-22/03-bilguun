import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
export const Header = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="dense"
            sx={{
              backgroundColor: "white",
            }}
          >
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
            >
              team.
            </IconButton>
            <Box
              marginLeft="auto"
              display="flex"
              flexDirection="row"
              alignItems="center"
              sx={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Typography
                variant="body1"
                color="grey"
                component="div"
                sx={{ textDecoration: "underline" }}
              >
                Products
              </Typography>
              <Typography
                variant="body1"
                color="grey"
                component="div"
                sx={{ textDecoration: "underline" }}
              >
                Services
              </Typography>
              <Typography
                variant="body1"
                color="grey"
                component="div"
                sx={{ textDecoration: "underline" }}
              >
                Contact
              </Typography>
              <Typography
                variant="body1"
                color="grey"
                component="div"
                sx={{ textDecoration: "underline" }}
              >
                Log In
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: "blue",
                }}
              >
                Get Access
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
