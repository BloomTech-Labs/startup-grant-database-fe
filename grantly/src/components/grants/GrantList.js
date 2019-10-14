// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Objects
import Grant from "./Grant";
import Loader from "react-loader-spinner";
import Typography from "@material-ui/core/Typography";

import { fetchApi, adminFetchApi } from "../../actions";

// Styles
import { homeStyles } from "../../styles/homeStyles";

// test funcs
// exports.sum = function(a, b) {
//   return a + b;
// };

export const GrantList = props => {
  const styles = homeStyles();

  useEffect(() => {
    if (props.inAdmin) {
      props.adminFetchApi();
    } else if (props.data.length === 0) {
      props.fetchApi();
    }
  }, []);
  const needToBeReviewed = props.data.filter(
    grant => grant.is_reviewed === false
  ).length;
  // const numberOfSuggestions = props.data.filter(grant => grant.requests.length > 0).length;
  if (props.isFetching) {
    return <Loader type="Triangle" color="#3DB8B3" height="100" width="100" />;
  }
  // console.log(user);
  console.log("List", props.data);
  return (
    <div>
      {props.data.length && (
        <p className={styles.results}>{props.data.length} Grants</p>
      )}
      {props.inAdmin && <p>{needToBeReviewed} grant(s) need to be reviewed</p>}

      {props.data.length > 0 ? (
        props.data.map(grant => {
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
        <div> Grants incoming! </div>
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
    grantStore: state.data
  };
};
export default connect(
  mapStateToProps,
  { fetchApi, adminFetchApi }
)(GrantList);
