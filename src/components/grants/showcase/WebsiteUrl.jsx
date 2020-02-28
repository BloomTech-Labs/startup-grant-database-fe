import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from '@material-ui/core'
import LanguageIcon from "@material-ui/icons/Language";

const useWebsiteUrlStyles = makeStyles(theme => ({
    website: {
        fill: "#696969"
    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        marginLeft: theme.spacing(2)
    }
}));

function WebsiteUrl({website}) {
    const classes = useWebsiteUrlStyles();
    return (
        <div className={classes.linkContainer}>
            <LanguageIcon className={classes.website}/>
            <Link href={website.website} target="_blank" className={classes.link}>
                {website.sponsoring_entity}
            </Link>
        </div>
    )
}

export default WebsiteUrl;
