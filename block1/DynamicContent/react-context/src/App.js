import ThemeContext from "./context/ThemeContext";
import Home from "./pages/Home";
import React from "react";
import { Header } from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeContext>
      <Box>
        <Header />
        <Home />
        <Footer />
      </Box>
    </ThemeContext>
  );
}

export default App;
