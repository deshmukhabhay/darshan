import React, { useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Img from "../../assets/images/homepage.png";
import Border from "../../components/Border";
const InfoList = [
    { title: "300+", label: "Cultural sites" },
    { title: "200+", label: "Natural Sites" },
    { title: "150+", label: "Protected Sites" },
    { title: "100+", label: "Temples" },
];
export default function Hero(props) {
    return (
        <Box
            sx={{
                marginTop: "-64px",
            }}
        >
            <Box
                sx={{
                    backgroundImage: `linear-gradient(180deg, #26080acf 0%, #26080a82 100%), url(${Img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    //   backgroundAttachment: 'fixed',
                    backgroundPosition: "center",
                    paddingTop: "64px",
                }}
            >
                <Box>
                    <Box
                        sx={{
                            color: "#FFE7D1",
                            display: "flex",
                            zIndex: 1,
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Border isWhite={true}></Border>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "64px",
                                lineHeight: "100px",
                                padding: "20px",
                                fontFamily: "ElMessiriRegular",
                                textAlign: "center",
                                "letter-spacing": "0.06em",
                            }}
                            variant="h2"
                            component="div"
                        >
                            Our Country is defined by our Heritage
                        </Typography>
                        <Border isWhite={true}>
                            <Typography
                                sx={{  fontWeight: 700, fontSize: "36px", lineHeight: "47px", margin: "20px 15px", textAlign: "center" }}
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                What is Dharohar Darshan
                            </Typography>
                        </Border>
                        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                                The rich heritage of India, one of the world's oldest civilizations, is an all-embracing confluence of religions, traditions and customs. The highlights of Indian
                                heritage lie in the treasure of its art, architecture, classical dance, music, flora and fauna
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
                                The Indian culture is described as 'Sa Prathama Sanskrati Vishvavara' - the first and the supreme culture in the world. It is honored as a divine culture. The core of
                                Indian culture, as shaped by the revered rishis, revolves around the principle of 'Vasudhaiva Kutumbakam' - treating the entire world as our own family, which reflects
                                universality of serene love, altruism, sharing of responsibilities and caring for all beings
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {InfoList.map((i, index) => (
                                    <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingX: "25px" }}>
                                        <Box sx={{  fontWeight: 700, fontSize: "36px" }}>{i.title}</Box>
                                        <Box sx={{  fontWeight: 500, fontSize: "20px" }}>{i.label}</Box>
                                    </Box>
                                ))}
                            </Box>
                            <Button
                                sx={{
                                    boxShadow: "inset 3px 4px 4px #FF993A",
                                    borderRadius: "81px",
                                    background: "#EC4E20",
                                    width: "293px",
                                    padding: "20px",
                                    color: "#FFFFFF",
                                    marginY: "40px",
                                    "&:hover": { backgroundColor: "#EC4E20" },
                                }}
                            >
                                <Box sx={{  fontWeight: 700, fontSize: "30px", textAlign: "center", color: "#FFFFFF" }}></Box>Visit now
                            </Button>
                        </Container>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
