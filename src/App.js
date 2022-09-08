import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Economy from "./pages/Economy";
import Technology from "./pages/Technology";
import NewsDetail from "./components/NewsDetail";
import EconomyDetail from "./components/EconomyDetail";
import TechnologyDetail from "./components/TechnologyDetail";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technologydetail/:id" element={<TechnologyDetail />} />
          <Route path="/newsdetail/:id" element={<NewsDetail />} />
          <Route path="/economydetail/:id" element={<EconomyDetail />} />
        </Routes>
    </Router>
  );
}

export default App;
