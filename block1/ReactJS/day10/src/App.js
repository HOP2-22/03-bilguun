import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { Navigation } from "./components/Navigation";
// import { PageOne } from ".//pages/Page-one";
import { Layout } from "./layout/layout";
// import { Contacts } from ".//pages/Contact";
// import { Products } from ".//pages/Products";
// import { Services } from ".//pages/Services";
// import { SignIn } from ".//pages/Sign-In";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/Products" element={<Contacts />} />
          <Route path="/Contacts" element={<Products />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Sign in" element={<SignIn />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
