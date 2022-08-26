import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Drawer, CssBaseline, AppBar as MuiAppBar, Toolbar, List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, Link } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Stack } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import CustomizedMenu from "./CustomizedMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    // backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, backgroundColor }) => ({
    backgroundColor: backgroundColor && backgroundColor,
    color: "#fff",
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function AppHeader(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
    const isTab = useMediaQuery(theme.breakpoints.down("md"));
    let location = useLocation();
    const navigate = useNavigate();

    const [bgColor, setBgColor] = React.useState("");

    const changeBackground = () => {
        if (window.scrollY >= 64) {
            setBgColor("#65050B");
        } else {
            setBgColor(location.pathname == "/" && "transparent");
        }
    };

    React.useEffect(() => {
        const { pathname } = location;
        changeBackground();

        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, [location]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const CustomLink = ({ href, label }) => (
        <Link
            href={href}
            style={{ color: "#FFF2D8", fontFamily: "DM Sans", fontWeight: 500, fontSize: "20px" }}
            activeStyle={{
                fontWeight: "bold",
                color: "red",
            }}
        >
            {label}
        </Link>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} location={location} backgroundColor={bgColor}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: "none" }) }}>
                        <MenuIcon />
                    </IconButton>
                    <Stack spacing={2} justifyContent="space-between" alignItems="center" flex={1} direction="row" sx={{ paddingX: "24px" }}>
                        {!isPhone && (
                            <>
                                <Logo />
                                <Stack alignItems="center" spacing={2} direction="row">
                                    <CustomLink href="/" label="Home" />
                                    <CustomLink href="/mappage" label="Map View" />
                                    <CustomLink href="#" label="About" />
                                    <CustomLink href="#" label="Discover" />
                                    <CustomLink href="#" label="Blog" />
                                </Stack>
                            </>
                        )}
                        {!isTab && <CustomizedMenu />}
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton sx={{ color: "#fff" }} onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {["Home", "Map View", "About", "Discover", "Blog"].map((text, index) => (
                        <ListItem key={index} disablePadding onClick={index == 0 || index == 1 ? (index == 0 ? () => navigate("/") : () => navigate("/mappage")) : undefined}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "#fff" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText sx={{ "& .MuiTypography-root": { color: "#fff" } }} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {props.children}
            </Main>
        </Box>
    );
}
