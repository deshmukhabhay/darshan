import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Button as MuiButton, Stack } from "@mui/material";
import { purple } from "@mui/material/colors";

const BootstrapButton = (props) => {
    const theme = useTheme();
    const _BootstrapButton = styled(MuiButton)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        border: "2px solid",
        borderRadius: "59px",
        color: props.solidBg ? theme.palette.secondary.main : theme.palette.primary.main,
        lineHeight: 1.5,
        borderColor: theme.palette.primary.main,
        fontFamily: "Poppins",
        backgroundColor: props.solidBg ? theme.palette.primary.main : "transparent",
        "&:hover": {
            boxShadow: "none",
            color: "#fff",
        },
        "&:active": {
            boxShadow: "none",
            color: "#fff",
        },
    });
    return (
        <_BootstrapButton variant="contained" disableRipple theme={{ theme }}>
            {props.children}
        </_BootstrapButton>
    );
};
export default function Button(props) {
    return <BootstrapButton solidBg={props.solidBg}>{props.children}</BootstrapButton>;
}
