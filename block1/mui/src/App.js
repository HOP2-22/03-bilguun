import React from "react";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
