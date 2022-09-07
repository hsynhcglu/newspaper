import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Corona from "./pages/Corona";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corona" element={<Corona />} />
          <Route path="/newsdetail/:id" element={<NewsDetail />} />
        </Routes>
    </Router>
  );
}

export default App;
