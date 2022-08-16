import React from "react";
import { ListItem, ListItemIcon, Box } from "@mui/material";
import DharoharDarshan from "../assets/images/DharoharDarshan.png";
import { useNavigate } from "react-router-dom";
export default function Logo(props) {
    const navigate = useNavigate();
    const { page } = props;
    return (
        <ListItem
            onClick={() => navigate("/")}
            sx={{
                cursor: 'pointer',
                fontFamily: "DM Sans",
                fontWeight: 700,
                width: "auto",
                fontSize: "29.46px",
            }}
        >
            <ListItemIcon sx={{ minWidth: 0, marginRight: "10px" }}>
                <img height="30px" src={DharoharDarshan} />
            </ListItemIcon>
            <Box sx={{ color: '#FFF2D8', fontFamily: "DM Sans", fontWeight: 700, fontSize: "20px", lineHeight: "31px" }}>Dharohar Darshan</Box>
        </ListItem>
    );
}
