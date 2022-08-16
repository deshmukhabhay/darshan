import React from "react";
import { Box, Stack, Grid } from "@mui/material";

import One from "../../assets/images/1.png";
import Two from "../../assets/images/4.png";
import Three from "../../assets/images/3.png";
import Four from "../../assets/images/2.png";
import FlawerBorder from "../../components/FlawerBorder";

export default function Sponsor() {
    const Items = () => {
        return [One, Two, Three, Four].map((i, index) => {
            return (
                <Grid key={index} item>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px" }}>
                        <img src={i} />
                    </div>
                </Grid>
            );
        });
    };

    return (
        <Box sx={{ padding: "40px 24px" }}>
            <FlawerBorder />
            <Grid justifyContent="center" alignItems="center" container rowSpacing={1}>
                <Items />
            </Grid>
            <FlawerBorder />
        </Box>
    );
}
