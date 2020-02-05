import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Button, IconButton, Link, SwipeableDrawer, Toolbar, Typography} from "@material-ui/core";
import {NavLink as RouterLink} from 'react-router-dom';
import {useAuth0} from "../auth0/Auth0Wrapper";
import FGLogo from "../../assets/FGLogo";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";
import {useSelector} from "react-redux";
import {ActionsContext} from "../../context/ActionsContext";
import {useGetToken} from "../auth0/useGetToken";

const useStyles = makeStyles(theme => ({
    navBar: {
        background: '#fff',
        flexGrow: 1,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
        [theme.breakpoints.down('xs')]: {
            position: 'fixed',
            padding: "0"
        }
    },
    title: {
        fontSize: '2.125rem',
        textAlign: 'left',
        color: '#000',
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.5rem",
            marginLeft: "5px"
        }
    },
    helloUser: {
        fontFamily: 'Nunito Sans',
        padding: '15px'
    },
    menu: {
        width: '2.5em',
        height: '2em',
        padding: '0'
    },
    navLink: {
        color: "#3CBBB1",
        textTransform: "uppercase",
        fontSize: "0.875rem",
        fontFamily: "Roboto",
        '&:hover': {
            textDecoration: "underline"
        },
    },
    navButton: {
        marginRight: theme.spacing(3),
        alignSelf: 'baseline',
        border: "1px solid #3CBBB1",
        borderRadius: "2px",
        backgroundColor: "#3CBBB1",
        color: "white",
        textTransform: "uppercase",
        padding: ".5em 2.2em",
        fontSize: "0.875rem",
        fontFamily: "Roboto",
        transition: "all .3s ease-in-out",
        '&:hover': {
            backgroundColor: "#83D7D1",
            color: 'white'
        },
    },
    toolBar: {
        backgroundColor: 'white'
    },
    titleLink: {
        flexGrow: 1,
        textDecoration: 'none'
    },
    linkContainer: {
        maxWidth: '600px',
        width: '100%',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

const menuItems = [
    {
        url: '/grants',
        title: 'Grants'
    },
    {
        url: '/about',
        title: 'About'
    }
];

const Navbar = () => {
    const actions = useContext(ActionsContext);
    const [isOpen, setIsOpen] = useState(false);
    const {currentUser} = useSelector(state => state.user);
    const [token] = useGetToken();
    const toggleDrawer = open => event => {
        if (event && event.type === 'keydown' && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpen(!isOpen);
    };
    const {isAuthenticated, user, loginWithRedirect} = useAuth0();

    const classes = useStyles();

    useEffect(() => {
        if (isAuthenticated && user) {
            actions.user.setUserFromAuth0(user);
        } else {
            actions.user.resetUser();
        }
    }, [isAuthenticated, user]);

    useEffect(() => {
        if (isAuthenticated && currentUser['https://founder-grants.com/appdata']) {
            if (currentUser['https://founder-grants.com/appdata'].authorization.roles.find(() => "Moderator") === "Moderator") {
                actions.user.isModerator();
            }
        }
    }, [currentUser]);

    useEffect(()=> {
        if (token && isAuthenticated && user) {
            actions.user.setToken(token);
            actions.user.getFavorites(token, user.sub);
        }
    }, [token]);

    return (
        <AppBar
            className={classes.navBar}
            color="primary"
            position="sticky"
        >
            <Toolbar className={classes.toolBar}>
                <Typography variant='h4' className={classes.titleLink}>
                    <Link component={RouterLink} to='/' className={classes.title}>
                        <FGLogo/>
                    </Link>
                </Typography>
                {isAuthenticated ? (
                    <>
                        <Typography variant="h6" component="h1" className={classes.helloUser}>
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
                            className={classes.navButton}
                            color='primary'
                            onClick={() => loginWithRedirect()}
                        >
                            Log In
                        </Button>
                    </div>
                )}
                <SwipeableDrawer
                    anchor="right"
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    open={isOpen}
                >
                    <SideMenu
                        toggleDrawer={toggleDrawer}
                        side="right"
                    />
                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;
