import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import "../../assets/css/HomePage.css";

import { useTheme } from "@mui/material/styles";
import Button from "../../components/Button";
import Border from "../../components/Border";
import { TempleListOne, TempleListTwo } from "../../utilities/constants";

export default function Fold({ order, title, sub, list }) {
    const theme = useTheme();

    const textClass = { color: theme.palette.primary.main, fontFamily: "DM Sans", fontWeight: 500, fontSize: "22px", lineHeight: "28px", marginY: "15px" };

    return (
        <>
            <Box>
                <Border>
                    <Typography
                        sx={{ fontFamily: "DM Sans", fontWeight: 700, fontSize: "36px", lineHeight: "47px", marginX: "20px", color: theme.palette.primary.main, textAlign: "center" }}
                        variant="subtitle1"
                        component="div"
                    >
                        {title}
                    </Typography>
                </Border>
                <Box sx={{ ...textClass, ...{ marginY: "16px", textAlign: "center" } }}>{sub}</Box>
                <Grid justifyContent="center" alignItems="center" container rowSpacing={1}>
                    <FoldTemplate list={list} />
                </Grid>
            </Box>
        </>
    );
}

export const FoldTemplate = ({ list }) => {
    const theme = useTheme();
    const textClass = { color: theme.palette.primary.main, fontFamily: "DM Sans", fontWeight: 500, fontSize: "22px", lineHeight: "28px", marginY: "15px" };
    return list.map((i, index) => {
        return (
            <Grid item key={index}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px" }}>
                    <img src={i.img} width="261px" height="261px" />
                    <Box sx={textClass}>{i.label}</Box>
                    <Button>Read More</Button>
                </div>
            </Grid>
        );
    });
};
