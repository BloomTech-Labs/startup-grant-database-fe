// Dependencies
import React from "react";
import { connect } from "react-redux";

// Objects

// Styles

const GrantShowcase = props => {
  console.log("GrantShowcase props", props);

  if (props.isFetching) {
    return <div></div>;
  }

  // we want one specific piece of data
  // that piece of data is the grant that the user picked
  // the piece of data will be specified on the Grant component
  // that was clicked on

  // when clicked on, it updates the GrantShowcase details
  // in the redux store

  return (
    <div className="grant-showcase">
      {/* <h2>{props.grant.competition_name}</h2>
      <div>{props.grant.amount}</div>
      <div>{props.grant.area_focus}</div> */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("GrantShowcase mapStateToProps state", state);
  return {
    isFetching: state.isFetching,
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  {}
)(GrantShowcase);
