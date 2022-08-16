import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: "1rem",
                    borderRadius: "10px",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    color: "#65050B",
                },
            },

        },
        MuiTypography: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    color: "#65050B",
                },
            },

        }
    },
    typography: {
        fontFamily: "DM Sans",
    },
    palette: {
        primary: {
            main: "#65050B",
        },
        secondary: {
            main: "#FFF2D8",
        },
    },
});
