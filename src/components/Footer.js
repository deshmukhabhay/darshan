import React from "react";
import { Grid, Box, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Facebook from "../assets/images/social/Facebook.svg";
import Instagram from "../assets/images/social/Instagram.svg";
import Twitter from "../assets/images/social/Twitter.svg";
import YouTube from "../assets/images/social/YouTube.svg";
import Logo from "./Logo";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function Footer(props) {
    const theme = useTheme();

    const Head = [];

    const Links = ["ASI", "Culture ministry", "Incredible India", "Tourism ministry", "Protected monuments"];

    const Links2 = ["Swadesh Darshan", "Copyright Policy", "Hyperlinking Policy", "Help", "Feedback"];

    const Contacts = ["Web information manager", "+020 2222020202"];

    const LinkItem = ({ list, title }) => (
        <Grid item xs={12} sm={6} md={3}>
            <List
                subheader={
                    <Box sx={{ padding: "8px 16px", fontWeight: 700, fontSize: "20px" }} component="div" id="nested-list-subheader">
                        {title}
                    </Box>
                }
            >
                {list.map((i, index) => (
                    <ListItem key={index}>
                        {i == "Web information manager" && <EmailOutlinedIcon sx={{marginRight: '8px'}} />}
                        {i == "+020 2222020202" && <CallOutlinedIcon sx={{marginRight: '8px'}} />}
                        {i}
                    </ListItem>
                ))}
            </List>
        </Grid>
    );
    return (
        <Box sx={{ flexGrow: 1, background: theme.palette.primary.main, color: "#fff" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>
                    <List>
                        <Logo />
                        <ListItem>Our Country, Our Heritage</ListItem>
                        <ListItem>
                            {[Facebook, Instagram, Twitter, YouTube].map((link, index) => (
                                <img key={index} src={link} style={{ margin: "0 12px" }} />
                            ))}
                        </ListItem>
                    </List>
                </Grid>
                <LinkItem list={Links} title="Links" />
                <LinkItem list={Links2} title="Links" />
                <LinkItem list={Contacts} title="Contact" />
            </Grid>
            <Grid container justifyContent="space-between" sx={{ padding: "16px" }}>
                <Grid item>Copyright © 2022 ASI</Grid>
                <Grid item>All Rights Reserved | Terms and Conditions | Privacy Policy</Grid>
            </Grid>
        </Box>
    );
}
