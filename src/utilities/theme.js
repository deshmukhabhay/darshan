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

        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderColor: "#65050B",
                    borderRadius: "85px",
                    color: '#65050B'
                },

            },
            
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderColor: "#65050B",
                    borderRadius: "85px",
                    color: '#65050B'
                },

            },
            
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    borderColor: "#65050B !important",
                    color: '#65050B'
                },

            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderColor: "#65050B",
                    color: '#65050B'
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    borderRadius: "85px",
                    color: '#65050B'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#65050B'
                }
            }

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
