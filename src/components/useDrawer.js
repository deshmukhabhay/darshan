import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer as MuiDrawer, Stack, Divider, Card, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { IconButton, Grid } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import TempleOne from "../assets/images/temple/Rectangle4516.png";
import TempleTwo from "../assets/images/temple/Rectangle4518.png";
import TempleThree from "../assets/images/temple/Rectangle4519.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import SubText from "./SubText";
import useMediaQuery from "@mui/material/useMediaQuery";

const data = [
    {
        src: c1,
        title: "Night view",
        description: "4.21M views",
    },
    {
        src: c2,
        title: "Lake view",
        description: "4.74M views",
    },
    {
        src: c3,
        title: "Mountain view",
        description: "3.98M views",
    },
    {
        src: c1,
        title: "Night view",
        description: "4.21M views",
    },
    {
        src: c2,
        title: "Lake view",
        description: "4.74M views",
    },
    {
        src: c3,
        title: "Mountain view",
        description: "3.98M views",
    },
];

function CarouselRatio() {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: "flex",
                padding: "10px",
                overflow: "auto",
                // scrollSnapType: "x mandatory",
                // "& > *": {
                //     scrollSnapAlign: "center",
                // },
                // "::-webkit-scrollbar": { display: "none" },
            }}
        >
            {data.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        paddingRight: "10px",
                        color: theme.palette.primary.main,
                    }}
                >
                    <img src={`${item.src}?h=120&fit=crop&auto=format`} srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`} alt={item.title} />
                    <Typography sx={{ marginTop: "10px" }} gutterBottom={false} fontWeight="md">
                        {item.title}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

const DrawerHeader = styled("div")(({ theme }) => ({
    padding: "16px",
    display: "flex",
    alignItems: "center",
    background: "#FFF2D8",
    color: theme.palette.primary.main,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
}));

export default function useDrawer(props) {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });

    const [isOpen, setOpen] = React.useState(false);
    const [title, setTile] = React.useState("Someshwar temple");

    const toggleDrawer = (open) => (event) => {
        // if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
        //     return;
        // }

        setOpen(open);

        // setState({ ...state, [anchor]: open });
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleOpen = (isOn, info) => {
        setOpen(isOn);
        setTile(info);
    };

    const Com = (second) => (
        <div>
            <React.Fragment key={"right"}>
                <MuiDrawer
                    ModalProps={{ onBackdropClick: () => toggleDrawer(false) }}
                    anchor={"right"}
                    open={isOpen}
                    onClose={toggleDrawer(false)}
                    sx={{
                        "& .MuiDrawer-paper": {
                            background: "#FFF2D8",
                            width: "50%",
                        },
                    }}
                >
                    <DrawerHeader>
                        <Box sx={{ fontFamily: "DM Sans", fontStyle: "normal", fontWeight: 500, fontSize: isPhone ? "18px" : "36px", lineHeight: "100%" }}>{title}</Box>
                        <IconButton onClick={handleDrawerClose}>
                            <CloseRounded sx={{ color: theme.palette.primary.main }} />
                        </IconButton>
                    </DrawerHeader>
                    <Box sx={{ paddingBottom: "24px" }}>
                        <Divider />
                    </Box>
                    <Box sx={{ height: "100%", borderRadius: "10px 0px 0px 10px" }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                        <Box sx={{ width: "100%", padding: "0 24px" }}>
                            <img src={TempleOne} width="100%" />
                            <Box pt="24px">
                                The Someshwara temple (also spelt Someshvara or Somesvara), situated in Kolar town of Karnataka state, India, built by Tamil kings Chola.is an ornate 14th century
                                Vijayanagara era Dravidian style construction. Vijayanagara era Dravidian style construction. Vijayanagara era Dravidian style construction.
                            </Box>
                        </Box>
                        <Box sx={{ paddingTop: "24px", textAlign: "center" }}>
                            <Button onClick={() => navigate("/location", { state: title })} variant="contained">
                                View in 360&deg;
                            </Button>
                        </Box>
                        <Box sx={{ padding: "24px 0" }}>
                            <Divider />
                        </Box>
                        <Grid justifyContent="center" spacing={3} alignItems="center" justifyContent="center" container rowSpacing={1} sx={{padding: '0 24px'}}>
                            <Grid item sm={12} md={6} alignItems="center">
                                <img src={TempleTwo} width="100%" />
                            </Grid>
                            <Grid item sm={12} md={6} alignItems="center" justifyContent="center">
                                <img src={TempleThree} width="100%" />
                            </Grid>
                        </Grid>
                        {/* <Stack alignItems="center" spacing={2} direction="row" sx={{ padding: "0 24px" }}>
                            <img src={TempleTwo} width="228px" />
                            <img src={TempleThree} width="228px" />
                        </Stack> */}
                        <Box sx={{ padding: "24px 0" }}>
                            <Divider />
                        </Box>
                        <SubText>People also visited</SubText>
                        <CarouselRatio />
                    </Box>
                </MuiDrawer>
            </React.Fragment>
        </div>
    );

    return {
        toggleDrawer: (open, info) => handleOpen(open, info),
        Component: Com,
    };
}
