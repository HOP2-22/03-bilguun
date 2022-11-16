import ThemeContext from "./context/ThemeContext";
import Home from "./pages/Home";
import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import User from "./pages/User";
import Blog from "./pages/Blog";

function App() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<User />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
