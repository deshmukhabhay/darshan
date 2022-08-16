import React from "react";
import { Box } from "@mui/material";

import Footer from "../../components/Footer";
import Hero from "./Hero";
import BgImage from "../../assets/images/Dharohar_Darshan_website_1.png";

import Fold from "./Fold";
import Sponsor from "./Sponsor";
import { TempleListOne, TempleListTwo } from "../../utilities/constants";
import AppHeader from "../../components/AppHeader";

export default function HomePage() {
    return (
        <div>
            <AppHeader>
                <Hero />
                <Box sx={{ backgroundImage: `url(${BgImage})` }}>
                    <Fold order={1} list={TempleListOne} title="Today’s Darshan" sub="See what happened today in History" />
                    <Fold order={2} list={TempleListTwo} title="10 Places to Visit" sub="" />
                    <Sponsor />
                </Box>
                <Footer />
            </AppHeader>
        </div>
    );
}
