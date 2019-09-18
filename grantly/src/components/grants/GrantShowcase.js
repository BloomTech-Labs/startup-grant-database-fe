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

  // console.log("GrantShowcase props", props);

  return (
    <div className="grant-showcase">
      <h2>{props.grant.competition_name}</h2>
      <div>{props.grant.amount}</div>
      <div>{props.grant.area_focus}</div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("GrantShowcase mapStateToProps state", state);
  return {
    grant: state.grantShowcase
  };
};

export default connect(
  mapStateToProps,
  {}
)(GrantShowcase);
