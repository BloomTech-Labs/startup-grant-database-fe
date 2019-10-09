import React, { useEffect } from "react";
import { connect } from "react-redux";

import Grant from "./Grant";
import Loader from "react-loader-spinner";
import { fetchApi, adminFetchApi } from "../../actions";

import { homeStyles } from "../../styles/homeStyles";

export const SuggestionList = props => {
  const styles = homeStyles();

  useEffect(() => {
    props.adminFetchApi();
    console.log("============SUGGESTION GRANTS", props.data);
  }, []);
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants
  };
};
export default connect(
  mapStateToProps,
  { adminFetchApi }
)(SuggestionList);
