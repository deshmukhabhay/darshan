import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/theme";
import { ProgressLoader } from "./components/ProgressLoader";

function App() {
    const HomePage = React.lazy(() => import("./pages/homepage/HomePage"));
    const LocationPage = React.lazy(() => import("./pages/LocationPage/LocationPage"));
    const MapPage = React.lazy(() => import("./pages/mappage/MapPage"));
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Suspense fallback={<ProgressLoader />}>
                            <HomePage />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/mappage"
                    exact={true}
                    element={
                        <React.Suspense fallback={<ProgressLoader />}>
                            <MapPage />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/location"
                    element={
                        <React.Suspense fallback={<ProgressLoader />}>
                            <LocationPage />
                        </React.Suspense>
                    }
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
