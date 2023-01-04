import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Boginoo } from "./components/boginoo";
import { Shortened } from "./components/shortened";
import { Box } from "@mui/system";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Url } from "./components/url";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Boginoo />} />
          <Route path="/shortened" element={<Shortened />} />
          <Route path="/:id" element={<Url />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
