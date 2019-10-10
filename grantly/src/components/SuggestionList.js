import React, { useEffect } from "react";
import { connect } from "react-redux";

import Suggestion from "./Suggestion";
import Loader from "react-loader-spinner";
import { adminFetchApi } from "../actions";

import { homeStyles } from "../styles/homeStyles";

export const SuggestionList = props => {
  const styles = homeStyles();

  // useEffect(() => {
  //   props.adminFetchApi();
  //   // console.log("============SUGGESTION GRANTS", props.data);
  // }, []);

  if (props.isFetching || !props.data.requests) {
    return <Loader type="Triangle" color="#3DB8B3" height="100" width="100" />;
  }

  console.log("REQUESTS=======", props.data.requests);
  //   console.log('REQUESTS LENGTH=======', props.data.requests.length)
    const requests = props.data.requests;

  return (
    <div>
      {/* {undefined !== requests && requests.length ? (
        props.data.requests.map(request => {
            return <Suggestion request={request} key={request.id} />;
        })
      ) : (
        <div>Incoming</div>
      )} */}
      {props.data.requests.map(request => {
        return <Suggestion request={request} key={request.id} />;
      })}
      {/* {props.data.requests.length > 0 ? (
      props.data.requests.map(grant => {
        return <Suggestion grant={grant} key={grant.id} />;
      })
    ) : (
      <div>Incoming</div>
    )} */}

      {/* {undefined !== requests && requests.length ? (
      props.data.requests.map(grant => {
        return <Suggestion grant={grant} key={grant.id} />;
      })
    ) : (
      <div>Incoming</div>
    )} */}
      {/* {props.data.requests !== undefined ? (
      props.grant.requests.map(grant => {
        return <Suggestion grant={grant} key={grant.id} />;
      })
    ) : (
      <div>Incoming</div>
    )} */}
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
