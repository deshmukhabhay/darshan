import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
        borderRadius: 85,
        position: "relative",
        border: `2px solid ${theme.palette.primary.main}`,
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(
            ","
        ),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        },
    },
}));

export default function CustomSelect(props) {
    const { label, options } = props;

    const [value, setValue] = React.useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select sx={{ borderRadius: 85 }} labelId="demo-simple-select-label" id="demo-simple-select" label={label} value={value} onChange={handleChange}>
                {options.map((i) => (
                    <MenuItem value={i}>{i}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
