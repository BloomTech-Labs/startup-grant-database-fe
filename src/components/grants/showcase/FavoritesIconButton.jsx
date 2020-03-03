import React, {useContext} from "react";
import {Fade, IconButton, Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {ActionsContext} from "../../../context/ActionsContext";

const useStyles = makeStyles(() => ({
    bookmark: {
        fill: "#696969"
    }
}));

function FavoritesIconButton({
                                 title,
                                 label,
                                 icon: Icon,
                                 button,
                                 id,
                                 removeFavorite
                             }) {
    const classes = useStyles();
    const actions = useContext(ActionsContext);
    const {
        token,
        currentUser: {sub}
    } = useSelector(state => state.user);

    function handleClick(id) {
        if (removeFavorite) {
            actions.user.removeFavorite(token, id);
        } else {
            actions.user.addFavorite(token, id, sub);
        }
    }

    return (
        <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{timeout: 600}}
            title={title}
        >
            {button ? (
                <IconButton aria-label={label} onClick={() => handleClick(id)}>
                    <Icon className={classes.bookmark}/>
                </IconButton>
            ) : (
                <Icon aria-label={label}/>
            )}
        </Tooltip>
    );
}

export default FavoritesIconButton;
