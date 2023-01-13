import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Boginoo } from "./components/boginoo";
import { Shortened } from "./components/shortened";
import { Login } from "./components/login";
import { SignUp } from "./components/signup";
import { Box } from "@mui/system";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Url } from "./components/url";
import { NameContext } from "./context/Context";

function App() {
  return (
    <BrowserRouter>
      <NameContext>
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Boginoo />} />
            <Route path="/shortened" element={<Shortened />} />
            <Route path="/:id" element={<Url />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </Box>
      </NameContext>
    </BrowserRouter>
  );
}

export default App;