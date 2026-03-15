import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Multimedia from "./pages/Multimedia";
import Writing from "./pages/Writing";
import Photography from "./pages/Photography";

function App() {
  return (
    <BrowserRouter basename="/tina-chen-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
