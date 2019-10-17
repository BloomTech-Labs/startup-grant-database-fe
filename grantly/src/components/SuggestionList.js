import React from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Suggestion from "./Suggestion";
import Loader from "react-loader-spinner";
import { adminFetchApi } from "../actions";

import { adminStyles } from "../styles/adminStyles";

export const SuggestionList = props => {
  const styles = adminStyles();
  if (props.isFetching || !props.data.requests) {
    return null
  }

  return (
    <div>
      {props.data.requests.length > 0 && (
        <Typography variant="h5" className={styles.adminActions}>
          Suggestions
        </Typography>
      )}
      {props.data.requests.map(request => {
        return <Suggestion request={request} key={request.id} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.grantShowcase
  };
};
export default connect(
  mapStateToProps,
  { adminFetchApi }
)(SuggestionList);
