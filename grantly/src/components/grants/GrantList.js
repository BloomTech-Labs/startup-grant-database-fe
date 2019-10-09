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
  // console.log("GrantList props", props);
  const styles = homeStyles();

  useEffect(() => {
    if (props.inAdmin) {
      props.adminFetchApi();
    } else if (props.data.length === 0) {
      props.fetchApi();
    } else {
      props.fetchApi();
    }
  }, []);

  if (props.isFetching) {
    return <Loader type="Triangle" color="#3DB8B3" height="100" width="100" />;
  }
  // console.log(user);
  return (
    <div>
      {props.data.length && (
        <p className={styles.results}>{props.data.length} Grants</p>
      )}
      <div>
        {props.data.length > 0 ? (
          props.data.map(grant => {
            return (
              <Grant grant={grant} key={grant.id} inAdmin={props.inAdmin} />
            );
          })
        ) : (
          <div> Grants incoming! </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants
  };
};
export default connect(
  mapStateToProps,
  { fetchApi, adminFetchApi }
)(GrantList);
