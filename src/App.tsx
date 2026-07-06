import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
