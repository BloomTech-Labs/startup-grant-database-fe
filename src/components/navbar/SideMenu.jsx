import React from "react";
import {useAuth0} from "../auth0/Auth0Wrapper";
import MenuItem from "./MenuItem";
import {Button, List, ListItem} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import {makeStyles} from "@material-ui/core/styles";
import ViewListIcon from "@material-ui/icons/ViewList";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MailIcon from "@material-ui/icons/Mail";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import InfoIcon from "@material-ui/icons/Info";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import {useSelector} from "react-redux";

const menuItems = [
    {
        url: "/grants",
        title: "View All Grants",
        icon: DashboardIcon
    },
    {
        url: "/suggestion",
        title: "Suggest a Grant",
        icon: MailIcon
    },
    {
        url: "/grants/favorites",
        title: "Favorite Grants",
        icon: BookmarkIcon
    },
    {
        url: "/about",
        title: "About Founder Grants",
        icon: InfoIcon
    },
    {
        url: "/settings",
        title: "Settings",
        icon: PersonIcon
    }
];

const useStyles = makeStyles(theme => ({
    drawer: {
        display: "flex",
        marginTop: "1em",
        fontSize: "2rem",
        height: "100%",
        width: "20rem"
    },
    links: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        width: "100%"
    },
    navButton: {
        marginRight: theme.spacing(3),
        alignSelf: "baseline",
        border: "1px solid #3CBBB1",
        borderRadius: "2px",
        backgroundColor: "#3CBBB1",
        color: "white",
        textTransform: "uppercase",
        padding: ".5em 2.5em",
        fontSize: "0.875rem",
        fontFamily: "Roboto",
        transition: "all .3s ease-in-out",
        width: "15em",
        height: "3.5em",
        marginLeft: "2.5em",
        "&:hover": {
            backgroundColor: "#83D7D1",
            color: "white"
        }
    }
}));

const SideMenu = ({side, toggleDrawer}) => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
    const {isModerator, isUserLoading} = useSelector(state => state.admin);
    const classes = useStyles();

    const handleAuthActions = () =>
        isAuthenticated ? logout() : loginWithRedirect();

    return (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
            className={classes.drawer}
        >
            <List className={classes.links}>
                {menuItems.map((item, id) => (
                    <MenuItem key={id} {...item} />
                ))}
                {isAuthenticated && isModerator && (
                    <>
                        <MenuItem url="/admin" title="Edit Grants" icon={ViewListIcon}/>
                        {!isUserLoading && <MenuItem url="/manage" title="Manage Users" icon={PeopleAltIcon}/>}
                    </>
                )}
                <ListItem>
                    <Button
                        className={classes.navButton}
                        color="inherit"
                        variant="outlined"
                        onClick={handleAuthActions}
                    >
                        {isAuthenticated ? "Logout" : "Log In"}
                    </Button>
                </ListItem>
            </List>
        </div>
    );
};

export default SideMenu;
