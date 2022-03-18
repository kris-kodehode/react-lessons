import "./App.css";
import { NavBar, NavLink } from "./componentsGlobal/componentsGlobal";
import AdvicePage from "./pages/AdvicePage";
import AboutUsPage from "./pages/AboutUsPage.js";
import RandomPersonPickerPage from "./pages/RandomPersonPickerPage.js";
import CatFactPage from "./pages/CatFactPage.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <NavLink to="/about-us-page">About Us </NavLink>
          <NavLink to="/advice-page">Advice Page</NavLink>
          <NavLink to="/cat-fact-page">Cat Facts</NavLink>
          <NavLink to="/random-person-picker-page">Pant Lottery</NavLink>
        </NavBar>
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
