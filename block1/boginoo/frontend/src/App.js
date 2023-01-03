import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Boginoo } from "./components/boginoo";
import { Box } from "@mui/system";
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Boginoo />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
