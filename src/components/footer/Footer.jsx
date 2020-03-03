import React from "react";
import FGLogo from "../../assets/FGLogo";
import {Link as RouterLink} from "react-router-dom";
import {Box, Grid, Link, Typography} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useFooterStyles = makeStyles(theme => ({
    root: {
        color: "#696969",
        background: "#fff",
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            paddingTop: 0,
            background: "#65D8CF",
            color: "#fff"
        }
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(2)
        }
    },
    links: {
        color: "#696969",
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
            textDecoration: "none"
        },
        [theme.breakpoints.down("xs")]: {
            color: "inherit"
        }
    }
}));

const footerLinksData = [
    {
        xs: 12,
        sm: 3,
        variant: "h5",
        component: RouterLink,
        to: "/about",
        fgComponent: true
    },
    {
        xs: 12,
        sm: 3,
        variant: "subtitle2",
        component: RouterLink,
        to: "/about",
        title: "about".toUpperCase()
    },
    {
        xs: 12,
        sm: 3,
        variant: "subtitle2",
        component: RouterLink,
        to: "/contact",
        title: "contact".toUpperCase()
    },
    {
        xs: 12,
        sm: 3,
        variant: "subtitle2",
        href: "https://www.1517fund.com/",
        title: "1517 fund".toUpperCase()
    },
    {
        xs: 12,
        variant: "subtitle2",
        title: `© 2020 FOUNDER GRANTS. ALL RIGHTS RESERVED.`
    }
];

function Footer() {
    const classes = useFooterStyles();
    return (
        <Box component="footer" className={classes.root}>
            <Grid container alignItems="center">
                {footerLinksData.map((link, i) => (
                    <Grid item xs={link.xs} sm={link.sm} key={i}>
                        <Typography variant={link.variant} className={classes.title}>
                            {link.to || link.href ? (
                                <Link
                                    component={link.component && RouterLink}
                                    to={link.to && link.to}
                                    href={link.href && link.href}
                                    className={classes.links}
                                >
                                    {link.fgComponent ? (
                                        <FGLogo siteMap={true}/>
                                    ) : (
                                        `${link.title}`
                                    )}
                                </Link>
                            ) : (
                                `${link.title}`
                            )}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Footer;
