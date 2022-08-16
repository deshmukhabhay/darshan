import React from "react";
import Footer from "../../components/Footer";
import Marker from "../../assets/images/Group25.png";
import { Box, Button, Container, Grid, InputAdornment, TextField } from "@mui/material";
import BgImage from "../../assets/images/Dharohar_Darshan_website_1.png";
import MapImage from "../../assets/images/India.png";
import ImageOne from "../../assets/images/site.jpeg";
import Fold from "../homepage/Fold";
import { TempleListThree, TempleListTwo } from "../../utilities/constants";
import AppHeader from "../../components/AppHeader";
import Sponsor from "../homepage/Sponsor";
import useDrawer from "../../components/useDrawer";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function MapPage() {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
    const isTab = useMediaQuery(theme.breakpoints.down("md"));
    const { toggleDrawer, Component } = useDrawer();

    const Card = ({ left, top, image, title, sub, isLeft }) => {
        let position = isLeft ? { left: 0 } : { right: 0 };

        return (
            <Box sx={{ position: isPhone ? "" : "absolute", left: left, top: top, padding: "24px" }}>
                <img src={Marker} />
                <Box
                    onClick={() => toggleDrawer(true, title)}
                    sx={{
                        padding: "16px",
                        background: "#FFF2D8",
                        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        width: "380px",
                        cursor: "pointer",
                        position: isPhone ? "" : "absolute",
                        ...position,
                    }}
                >
                    <img height="86px" style={{ borderRadius: "10px" }} src={image} />
                    <Box pl="16px">
                        <Box sx={{ fontWeight: 600, fontSize: "20px", color: "#5F0409" }}>{title}</Box>
                        <Box sx={{ fontWeight: 500, fontSize: "18px", color: "#5F0409" }}>{sub}</Box>
                        <Box sx={{ fontWeight: 600, fontSize: "20px", color: "#5F0409", textDecorationLine: "underline" }}>View now ></Box>
                    </Box>
                </Box>
            </Box>
        );
    };

    let inputClass = {
        border: "2px solid #6D3502",
        borderRadius: "85px",
        flex: 1,
        "& .MuiOutlinedInput-notchedOutline": { borderWidth: 0 },
        "& .MuiInputBase-input": { color: theme.palette.primary.main },
    };
    return (
        <div>
            <AppHeader>
                <Box sx={{ backgroundImage: `url(${BgImage})` }}>
                    <Container>
                        <Grid justifyContent="center" spacing={4} alignItems="center" container rowSpacing={3} sx={{ paddingY: "24px" }}>
                            <Grid item sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    placeholder="Search a place"
                                    sx={{ ...inputClass }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <TextField
                                    fullWidth
                                    placeholder="Filter State"
                                    sx={{ ...inputClass }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <ArrowDropDownIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <TextField
                                    fullWidth
                                    placeholder="Filter State"
                                    sx={{ ...inputClass }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <ArrowDropDownIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <TextField
                                    fullWidth
                                    placeholder="Filter State"
                                    sx={{ ...inputClass }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <ArrowDropDownIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                    <Box sx={{ position: "relative", background: "#8AB4F8", paddingY: "24px" }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${MapImage})`,
                                height: 800,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                //   backgroundAttachment: 'fixed',
                                backgroundPosition: "center",
                                paddingTop: "64px",
                                position: "relative",
                            }}
                        >
                            <Card left={isTab ? "46%" : "36%"} top="52%" title="Someshwar temple" sub="Gujarat" image={ImageOne} />
                            <Card left={isTab ? "31%" : "51%"} top="42%" title="Ganpati Temple" sub="Maharashtra" image={ImageOne} isLeft />
                            <Card left={isTab ? "30%" : "40%"} top="21%" title="Site of Sahet" sub="UP" image={ImageOne} />
                        </Box>
                    </Box>
                    <Component />
                    <Fold order={1} list={TempleListTwo} title="10 Places to Visit" sub="Curated list of sites you can virtually visit" />
                    <Sponsor />
                </Box>
                <Footer />
            </AppHeader>
        </div>
    );
}
