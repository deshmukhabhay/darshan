import React from "react";
import { Box, Stack } from "@mui/material";

import BorderImage from "../assets/images/Panti.png";

export default function FlawerBorder(props) {
    return (
        <Stack alignItems="center" sx={{  width: '100%' }} direction="row">
            <Box sx={{ backgroundImage: `url(${BorderImage})`, backgroundRepeat: "repeat-x", flex: 0.5, color: "transparent", backgroundSize: '750px' }}> .</Box>
            <Box sx={{ backgroundImage: `url(${BorderImage})`, backgroundRepeat: "repeat-x", flex: 0.5, color: "transparent", backgroundSize: '750px' }}> .</Box>
        </Stack>
    );
}
