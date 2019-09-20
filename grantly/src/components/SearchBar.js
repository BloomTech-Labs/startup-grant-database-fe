import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  pos: {
    position: "fixed"
  },

  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "95%",
    margin: "0 auto 10px",
    boxShadow: "none"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>

        <InputBase
          className={classes.input}
          placeholder="Search for grant..."
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
    </div>
  );
};

export default SearchBar;
