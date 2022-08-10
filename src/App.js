import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LocationPage from "./pages/LocationPage/LocationPage";
import MapPage from "./pages/mappage/MapPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mappage" element={<MapPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </div>
  );
}

export default App;
