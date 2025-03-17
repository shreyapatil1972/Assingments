import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TributePage from "./components/TributePage";
import Gallery from "./components/Gallery";
import FamilyTree from "./components/FamilyTree";
import Timeline from "./components/Timeline";
import Obituary from "./components/Obituary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TributePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/family-tree" element={<FamilyTree />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/obituary" element={<Obituary />} />
      </Routes>
    </Router>
  );
}

export default App;
