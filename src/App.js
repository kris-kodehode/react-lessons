import logo from "./logo.svg";
import "./App.css";
import AdvicePage from "./pages/AdvicePage.js";
import AboutUsPage from "./pages/AboutUsPage.js";
import RandomPersonPickerPage from "./pages/RandomPersonPickerPage.js";
import CatFactPage from "./pages/CatFactPage.js";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/about-us-page">About Us </Link>
          <Link to="/advice-page">Advice Page</Link>
          <Link to="/cat-fact-page">Cat Facts</Link>
          <Link to="/random-person-picker-page">Pant Lottery</Link>
        </nav>
        <Routes>
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/advice-page" element={<AdvicePage />} />
          <Route path="/cat-fact-page" element={<CatFactPage />} />
          <Route
            path="/random-person-picker-page"
            element={<RandomPersonPickerPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
