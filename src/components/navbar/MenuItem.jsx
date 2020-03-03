import React from 'react';

import {Link, ListItem, ListItemAvatar, ListItemIcon, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    drawerStyle: {
        paddingLeft: '40px',
        margin: '0.5em 0',
        '&:hover': {
            backgroundColor: '#83D7D1'
        }
    },
    icon: {
        paddingLeft: '0.5em'
    },
    drawerLink: {
        margin: '.25em',
        color: '#696969',
        "&:hover": {
            textDecoration: 'none'
        }
    }
}));

const MenuItem = ({url, icon: Icon, title}) => {
    const classes = useStyles();
    return (
        <ListItem className={classes.drawerStyle}>
            <ListItemAvatar>
                <ListItemIcon className={classes.icon}>
                    <Icon/>
                </ListItemIcon>
            </ListItemAvatar>
            <Link component={RouterLink} to={url} className={classes.drawerLink}>
                <Typography variant="h5">{title}</Typography>
            </Link>
        </ListItem>
    )
};

export default MenuItem;
