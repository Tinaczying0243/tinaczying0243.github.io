import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Multimedia from "./pages/Multimedia";
import Writing from "./pages/Writing";
import Photography from "./pages/Photography";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter basename="/tina-chen-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
