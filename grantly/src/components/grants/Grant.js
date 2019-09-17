// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";

// Objects
import { selectGrant } from "../../actions";

// Styles

const Grant = props => {
  // console.log("Grant props", props);

  const [grantShowcase, setGrantShowcase] = useState({});

  const selectGrant = () => {
    console.log("clicked");
    console.log("Selected Grant:", props.grant);
    setGrantShowcase(props.grant);
    props.selectGrant(props.grant);
  };
  console.log("grantShowcase", grantShowcase);

  return (
    <div className="grant-card">
      <h2>{props.grant.competition_name}</h2>
      <div>{props.grant.amount}</div>
      <div>{props.grant.area_focus}</div>
      <div className="btn" onClick={selectGrant}>
        Select
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("Grant mapStateToProps state", state);
  return {};
};

export default connect(
  mapStateToProps,
  { selectGrant }
)(Grant);
