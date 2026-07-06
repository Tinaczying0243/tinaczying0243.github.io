import { Navigate, Route, Routes } from "react-router-dom";
import ArticlePage from "../features/articles/ArticlePage";
import Home from "../pages/Home";
import Multimedia from "../pages/Multimedia";
import Writing from "../pages/Writing";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/multimedia" element={<Multimedia />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />

      {/* Legacy URLs */}
      <Route path="/news-clips/silicon-labs-ti" element={<Navigate to="/articles/silicon-labs-ti" replace />} />
      <Route path="/news-clips/advanced-energy-aeis" element={<Navigate to="/articles/advanced-energy-aeis" replace />} />
      <Route path="/news-clips/nlight-lasr" element={<Navigate to="/articles/nlight-lasr" replace />} />
    </Routes>
  );
}
