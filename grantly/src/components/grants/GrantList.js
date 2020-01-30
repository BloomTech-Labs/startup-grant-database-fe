import React, { useEffect } from "react";
import {connect, useSelector} from "react-redux";
// import { useAuth0 } from "../../react-auth0-wrapper";
import { fetchApi, adminFetchApi, favoriteFetchApi } from "../../actions";

import { homeStyles } from "../../styles/homeStyles";
import Typography from "@material-ui/core/Typography";
import Grant from "./Grant";

// test funcs
// exports.sum = function(a, b) {
//   return a + b;
// };

export const GrantList = props => {
  const styles = homeStyles();
  const {grants} = useSelector(state => state.filters);
  // useEffect(() => {
  //   props.fetchApi();
  // }, []);

  const needToBeReviewed = grants.filter(
    grant => grant.is_reviewed === false
  ).length;
  // const numberOfSuggestions = grants.filter(grant => grant.requests.length > 0).length;

  // console.log(user);
  // console.log("CurrentUser Data from Store", props.currentUser);

  return (
    <div>
      {grants.length && (
        <Typography className={styles.results}>
          {grants.length} Grants
        </Typography>
      )}
      {/* {props.inAdmin && <p>{needToBeReviewed} grant(s) need to be reviewed</p>} */}

      {grants.length > 0 ? (
        grants.map(grant => {
          return (
            <Grant
              grant={grant}
              key={grant.id}
              inAdmin={props.inAdmin}
              history={props.history}
            />
          );
        })
      ) : (
        <Typography className={styles.results}>
          {" "}
          Grants incoming!{" "}
        </Typography>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    savedFilters: state.filters
  };
};
export default connect(mapStateToProps, {
  fetchApi,
  adminFetchApi,
  favoriteFetchApi
})(GrantList);
