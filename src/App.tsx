import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Multimedia from "./pages/Multimedia";
import Writing from "./pages/Writing";
import Photography from "./pages/Photography";
import NewsClips from "./pages/NewsClips";
import SiliconLabsArticle from "./pages/SiliconLabsArticle";

function App() {
  return (
    <BrowserRouter basename="/tina-chen-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/news-clips" element={<NewsClips />} />
        <Route path="/news-clips/silicon-labs-ti" element={<SiliconLabsArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
