import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import BgImage from "../../assets/images/Dharohar_Darshan_website_1.png";
import { useTheme } from "@mui/material/styles";
import ReactPannellum, { getConfig } from "react-pannellum";
import Img from "../../assets/images/For360view.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { TempleListThree } from "../../utilities/constants";
import AppHeader from "../../components/AppHeader";
import Fold from "../homepage/Fold";
import { Box, Container, Grid, Typography } from "@mui/material";
import Sponsor from "../homepage/Sponsor";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShareIcon from "@mui/icons-material/Share";
import useMediaQuery from "@mui/material/useMediaQuery";
import First from "../../assets/images/Rectangle26.png";
import Second from "../../assets/images/Rectangle27.png";
import Third from "../../assets/images/Rectangle28.png";
import Fourth from "../../assets/images/Rectangle29.png";
import Fifth from "../../assets/images/Rectangle30.png";
import Border from "../../components/Border";
import Button from "../../components/Button";

export default function LocationPage() {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
    const isTab = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    useEffect(() => {
        const Element = document.getElementsByClassName("container3");
        if (Element.length) Element[0].scrollIntoView();
    }, []);

    const config = {
        autoRotate: -2,
        autoLoad: true,
        showZoomCtrl: true,
        doubleClickZoom: true,
        startAutoRotate: false,
    };

    const { state } = useLocation();

    const transitionClass = {
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
            transform: "scale(1.2)",
        },
    };

    return (
        <div>
            <AppHeader>
                <Box sx={{ backgroundImage: `url(${BgImage})` }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: theme.palette.primary.main,
                            padding: "24px",
                            width: isPhone ? "100%" : "70%",
                            margin: "auto",
                        }}
                    >
                        <ArrowBackIosIcon onClick={() => navigate("/mappage")} sx={{ cursor: "pointer" }} />
                        <Box sx={{ fontWeight: 400, fontSize: "48px" }}>{state || ""}</Box>
                        <ShareIcon sx={{ cursor: "pointer" }} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", padding: "24px" }}>
                        <ReactPannellum
                            style={{
                                width: isPhone ? "300px" : isTab ? "500px" : "900px",
                                height: isPhone ? "300px" : isTab ? "400px" : "500px",
                                background: "#000000",
                                boxShadow:
                                    "0px 76px 221px rgba(0, 0, 0, 0.07), 0px 30.441px 92.3285px rgba(0, 0, 0, 0.0348285), 0px 15.4093px 49.3632px rgba(0, 0, 0, 0.0269704), 0px 8.08495px 27.6726px rgba(0, 0, 0, 0.0228977), 0px 3.96141px 14.6967px rgba(0, 0, 0, 0.0198035), 0px 1.49672px 6.11564px rgba(0, 0, 0, 0.0154532)",
                                borderRadius: "9px",
                            }}
                            id="1"
                            sceneId="firstScene"
                            imageSource={Img}
                            config={config}
                        />
                    </Box>
                    <Grid justifyContent="center" spacing={2} alignItems="center" container rowSpacing={3} sx={{ paddingY: "24px" }}>
                        {[First, Second, Third, Fourth, Fifth].map((i, index) => (
                            <Grid sx={{...transitionClass, ...{ padding: "24px" }}}>
                                <img key={index} src={i} />
                            </Grid>
                        ))}
                    </Grid>
                    <Border>
                        <Typography
                            sx={{ fontFamily: "DM Sans", fontWeight: 700, fontSize: "36px", lineHeight: "47px", margin: "20px 15px", textAlign: "center" }}
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                        >
                            Facts
                        </Typography>
                    </Border>
                    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: theme.palette.primary.main }}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "24px",
                                lineHeight: "28px",
                                textAlign: "center",
                                margin: "30px auto",
                            }}
                            variant="subtitle1"
                            component="div"
                        >
                            The temple was suffer destruction at the hands of Mahmud Ghazni in 1024, Khilji’s army in 1296, Muzaffar Shah in 1375, Mahmud Begada in 1451 and Aurangzeb in 1665.
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "24px",
                                lineHeight: "28px",
                                textAlign: "center",
                                margin: "30px auto",
                            }}
                            variant="subtitle1"
                            component="div"
                        >
                            The legend has it that the initial structure of the temple was first built by Moon God who constructed thetemple with gold. The Sun God used silver for its construction,
                            whereas Lord Krishna made it with the help of sandalwood.
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "24px",
                                lineHeight: "28px",
                                textAlign: "center",
                                margin: "30px auto",
                            }}
                            variant="subtitle1"
                            component="div"
                        >
                            The modern day Somnath Temple was built over five years, from 1947 to 1951 and was inaugurated by then President of India Dr Rajendra Prasad.
                        </Typography>
                        <Button solidBg>Read More...</Button>
                    </Container>
                    <Fold order={1} list={TempleListThree} title="Nearby Heritage Sites" sub="See what happened today in History" />
                    <Sponsor />
                </Box>

                <Footer />
            </AppHeader>
        </div>
    );
}
