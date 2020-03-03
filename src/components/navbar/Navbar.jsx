import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, IconButton, Link, SwipeableDrawer, Toolbar, Typography} from "@material-ui/core";
import {NavLink as RouterLink} from "react-router-dom";
import {useAuth0} from "../auth0/Auth0Wrapper";
import FGLogo from "../../assets/FGLogo";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";
import {useSelector} from "react-redux";
import {ActionsContext} from "../../context/ActionsContext";
import {useGetToken} from "../auth0/useGetToken";

const useStyles = makeStyles(theme => ({
    navBar: {
        background: "#fff",
        flexGrow: 1,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
        [theme.breakpoints.down("xs")]: {
            position: "fixed",
            padding: "0"
        }
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
        color: "#000",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none"
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing(1)
        }
    },
    helloUser: {
        fontFamily: "Nunito Sans",
        padding: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    menu: {
        width: "2.5em",
        height: "2em",
        padding: "0"
    },
    navLink: {
        color: "#3CBBB1",
        textTransform: "uppercase",
        fontSize: "0.875rem",
        fontFamily: "Roboto",
        "&:hover": {
            textDecoration: "underline"
        },
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    navButton: {
        marginRight: theme.spacing(3),
        alignSelf: "baseline",
        border: "1px solid #3CBBB1",
        borderRadius: "2px",
        backgroundColor: "#3CBBB1",
        color: "white",
        textTransform: "uppercase",
        padding: ".5em 2.2em",
        fontSize: "0.875rem",
        fontFamily: "Roboto",
        transition: "all .3s ease-in-out",
        "&:hover": {
            backgroundColor: "#83D7D1",
            color: "white"
        }
    },
    toolBar: {
        backgroundColor: "white",
        [theme.breakpoints.down("xs")]: {
            padding: 0
        }
    },
    linkContainer: {
        maxWidth: "150px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "space-between",
            maxWidth: "275px"
        }
    }
}));

const menuItems = [
    {
        url: "/grants",
        title: "Grants"
    },
    {
        url: "/about",
        title: "About"
    }
];

const Navbar = () => {
    const actions = useContext(ActionsContext);
    const [isOpen, setIsOpen] = useState(false);
    const {currentUser, isLoading} = useSelector(state => state.user);
    const {isModerator} = useSelector(state => state.admin);
    const [token] = useGetToken();
    const toggleDrawer = open => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setIsOpen(!isOpen);
    };
    const {isAuthenticated, user, loginWithRedirect, loading} = useAuth0();

    const classes = useStyles();

    useEffect(() => {
        if (
            isAuthenticated &&
            currentUser.roles.filter(role => role.name === "Moderator").length > 0
        ) {
            actions.admin.isModerator();
        }
        if (
            isAuthenticated &&
            currentUser.app_metadata.authorization.permissions.length > 0
        ) {
            actions.admin.isAdmin();
        }
    }, [currentUser]);

    useEffect(() => {
        if (token && isAuthenticated && user) {
            actions.user.setToken(token);
            actions.user.getUserFromAuth0(token);
            actions.user.getFavorites(token, user.sub);
        }
    }, [token]);

    useEffect(() => {
        if (isModerator) {
            actions.admin.fetchAdminGrants(token);
            actions.admin.fetchAllUsers(token);
            actions.admin.fetchAllRoles(token);
        }
    }, [isModerator]);

    return (
        <AppBar className={classes.navBar} color="primary" position="sticky">
            <Toolbar className={classes.toolBar}>
                <Link component={RouterLink} to="/" className={classes.title}>
                    <FGLogo/>
                </Link>
                {isAuthenticated && currentUser.nickname !== undefined ? (
                    <>
                        <Typography variant="body1" className={classes.helloUser}>
                            {`Welcome, ${currentUser.nickname}`}
                        </Typography>
                        <IconButton
                            edge="start"
                            color="primary"
                            aria-label="menu"
                            onClick={toggleDrawer()}
                        >
                            <MenuIcon className={classes.menu}/>
                        </IconButton>
                    </>
                ) : (
                    <div className={classes.linkContainer}>
                        {menuItems.map(({title, url}) => (
                            <Link
                                key={title}
                                component={RouterLink}
                                to={url}
                                className={classes.navLink}
                            >
                                {title}
                            </Link>
                        ))}
                        <Button
                            size="small"
                            className={classes.navButton}
                            color="primary"
                            onClick={() => loginWithRedirect()}
                            disabled={loading || isLoading}
                        >
                            {loading || isLoading ? `Loading...` : `Log in`}
                        </Button>
                    </div>
                )}
                <SwipeableDrawer
                    anchor="right"
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    open={isOpen}
                >
                    <SideMenu toggleDrawer={toggleDrawer} side="right"/>
                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
