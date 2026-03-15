import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Multimedia from "./pages/Multimedia";
import Writing from "./pages/Writing";
import SiliconLabsArticle from "./pages/SiliconLabsArticle";
import AdvancedEnergyArticle from "./pages/AdvancedEnergyArticle";
import NLightArticle from "./pages/nLightArticle";
import MercuryArticle from "./pages/MercuryArticle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/tina-chen-portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/news-clips/silicon-labs-ti" element={<SiliconLabsArticle />} />
        <Route path="/news-clips/advanced-energy-aeis" element={<AdvancedEnergyArticle />} />
        <Route path="/news-clips/nlight-lasr" element={<NLightArticle />} />
        <Route path="/articles/:slug" element={<MercuryArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
