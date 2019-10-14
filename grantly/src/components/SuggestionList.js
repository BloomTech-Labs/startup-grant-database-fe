import React, { useEffect } from "react";
import { connect } from "react-redux";

import Suggestion from "./Suggestion";
import Loader from "react-loader-spinner";
import { adminFetchApi } from "../actions";

import { homeStyles } from "../styles/homeStyles";

export const SuggestionList = props => {
  const styles = homeStyles();

  if (props.isFetching || !props.data.requests) {
    return <Loader type="Triangle" color="#3DB8B3" height="100" width="100" />;
  }

  return (
    <div>
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
