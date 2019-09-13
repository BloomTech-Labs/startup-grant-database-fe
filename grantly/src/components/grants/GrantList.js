// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Objects
import Grant from "./Grant";
import Loader from "react-loader-spinner";
import { fetchApi } from "../actions";

// Styles

const GrantList = props => {
  useEffect(() => {
    props.fetchApi();
  }, []);

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  return (
    <div>
      {props.data.length > 0 ? (
        props.data.map(grant => {
          return <Grant grant={grant} key={grant.id} />;
        })
      ) : (
        <div> Grants incoming! </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.data
  };
};
export default connect(
  mapStateToProps,
  { fetchApi }
)(GrantList);
