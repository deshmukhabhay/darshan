import React from "react";
import { CircularProgress, Box } from "@mui/material";

export const ProgressLoader = (second) => {
    return (
        <Box sx={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress />
        </Box>
    );
};
