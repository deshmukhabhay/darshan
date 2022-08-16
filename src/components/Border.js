import React from "react";
import { Box, Stack } from "@mui/material";

import BorderImage from "../assets/images/Border.svg";
import BorderWhiteImage from "../assets/images/BorderWhite.svg";

export default function Border(props) {
    return (
        <>
            {props.children ? (
                <Stack alignItems="center" sx={{ paddingY: "16px", width: "100%" }} direction="row">
                    <Box sx={{ backgroundImage: `url(${props.isWhite ? BorderWhiteImage : BorderImage})`, backgroundRepeat: "repeat-x", flex: 1, color: "transparent" }}> .</Box>
                    {props.children}
                    <Box sx={{ backgroundImage: `url(${props.isWhite ? BorderWhiteImage : BorderImage})`, backgroundRepeat: "repeat-x", flex: 1, color: "transparent" }}> .</Box>
                </Stack>
            ) : (
                <Stack alignItems="center" sx={{ paddingY: "16px", width: "100%" }} direction="row">
                    <Box sx={{ backgroundImage: `url(${props.isWhite ? BorderWhiteImage : BorderImage})`, backgroundRepeat: "repeat-x", flex: 1, color: "transparent" }}> .</Box>
                </Stack>
            )}
        </>
    );
}
