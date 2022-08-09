import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import MapPage from "./pages/mappage/MapPage";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mappage" element={<MapPage />} />
      </Routes>
    </div>
  );
}

export default App;
