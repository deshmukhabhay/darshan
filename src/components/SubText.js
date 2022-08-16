import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function SubText({ children }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                color: theme.palette.primary.main,
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "20px",
                margin: "10px 0",
                color: theme.palette.primary.main,
                textAlign: "center",
            }}
            component="div"
        >
            {children}
        </Box>
    );
}
