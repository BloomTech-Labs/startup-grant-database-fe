import React from "react";
import { connect } from "react-redux";
// import { useAuth0 } from "../../react-auth0-wrapper";
// import { favoriteFetchApi } from "../../actions";

// import Typography from "@material-ui/core/Typography";
import { homeStyles } from "../../styles/homeStyles";
import Grant from "./Grant";

export const FavoritesList = props => {
  // console.log("favoriteList", props);
  const styles = homeStyles();

  return (
    <div>
      {props.favorites.length && (
        <p className={styles.results}>{props.favorites.length} Grants</p>
      )}

      {props.favorites.length > 0 ? (
        props.favorites.map(grant => {
          return (
            <Grant
              grant={grant}
              key={grant.id}
              inFavorite={props.inFavorite}
              history={props.history}
            />
          );
        })
      ) : (
        <div>Favorites incoming!</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    favorites: state.favorites,
    grantStore: state.data,
    savedFilters: state.filters
  };
};
export default connect(mapStateToProps, {})(FavoritesList);
