import React from "react";
import { Fade, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

  function handleClick(id) {
    if (removeFavorite) {
      console.log("Remove Favorite", id);
    } else {
      console.log("Add to Favorite", id);
    }
  }

  return (
    <Tooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={title}
    >
      {button ? (
        <IconButton aria-label={label}>
          <Icon className={classes.bookmark} onClick={() => handleClick(id)} />
        </IconButton>
      ) : (
        <Icon aria-label={label} />
      )}
    </Tooltip>
  );
}

export default FavoritesIconButton;
