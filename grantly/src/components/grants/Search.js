import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  searchBar: {
    width: "65%",
    display: "flex",
    position: "absolute"
  },
  searchIcon: {
    padding: "20px",
    background: "#3DB8B3",
    borderLeft: "0px",
    borderRadius: "0px 5px 5px 0px",
    transition: "all 0.4s ease"
  }
}));

const Search = props => {
  const classes = useStyles();

  return (
    <form className={classes.searchBar} onClick={props.conditionalScroll}>
      <input
        placeholder="Search grants..."
        type="text"
        name="search"
        onChange={props.searchResults}
        value={props.search}
        className={classes.searchInput}
        onSubmit={props.searchResults}
      />
      <SearchIcon
        className={classes.searchIcon}
        onClick={props.searchResults}
      ></SearchIcon>
    </form>
  );
};

export default Search;
