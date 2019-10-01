import React from "react";
import Paper from "@material-ui/core/Paper";
import { searchBarStyles } from "../styles/searchbarStyles";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const classes = searchBarStyles();

  return (
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
  );
};

export default SearchBar;
