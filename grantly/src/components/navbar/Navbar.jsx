import React, {useState, useEffect, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Link, IconButton, SwipeableDrawer} from "@material-ui/core";
import {NavLink as RouterLink} from 'react-router-dom';
import {useAuth0} from "../auth0/Auth0Wrapper";
import FGLogo from "../../assets/FGLogo";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";
import {useSelector} from "react-redux";
import {ActionsContext} from "../../context/ActionsContext";

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
        textAlign: 'left',
        marginLeft: '20px',
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
        marginRight: theme.spacing(3),
        color: "#3CBBB1",
        textTransform: "uppercase",
        padding: ".5em 2.5em",
        fontSize: "0.875rem",
        fontFamily: "Roboto",
        width: '15em',
        height: '3.5em',
        marginLeft: '2.5em',
        '&:hover': {
            textDecoration: "underline"
        },
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
    const {currentUser} = useSelector(state => state.user)
    const toggleDrawer = open => event => {
        console.log("I was clicked");
        if (event && event.type === 'keydown' && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpen(!isOpen);
    };
    const {isAuthenticated, user, loginWithRedirect} = useAuth0();

    const classes = useStyles();

    useEffect(()=> {
        if (isAuthenticated && user) {
            actions.user.setUserFromAuth0(user);
        }
    }, [isAuthenticated, user]);

    return (
        <AppBar
            className={classes.navBar}
            color="primary"
            position="sticky"
        >
             <Toolbar>
                 <Typography variant='h4' className={classes.title}>
                     <Link component={RouterLink} to='/'>
                         <FGLogo />
                     </Link>
                 </Typography>
                 {isAuthenticated ? (
                     <>
                        <Typography variant="h4" component="h1" className={classes.helloUser}>
                            {`Welcome, Test User`}
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
                 ): (
                    <>
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
                        <Link
                            className={classes.navButton}
                            to="#"
                            onClick={() => loginWithRedirect()}
                        >
                            Log In
                        </Link>
                    </>
                 )}
                 <SwipeableDrawer
                     anchor="right"
                     onClose={toggleDrawer(false)}
                     onOpen={toggleDrawer(true)}
                     open={isOpen}
                 >
                     <SideMenu
                         currentUser={currentUser}
                         toggleDrawer={toggleDrawer}
                         side="right"
                     />
                 </SwipeableDrawer>
             </Toolbar>
        </AppBar>
    )
}

export default Navbar;
