import "./App.css";
import Product from "./components/Pages/Product";
import Contact from "./components/Pages/Contact";
import Faq from "./components/Pages/Faq";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home link={Link} />} />
          <Route path="/product" element={<Product link={Link} />} />
          <Route path="/faq" element={<Faq link={Link} />} />
          <Route path="contact" element={<Contact link={Link} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
