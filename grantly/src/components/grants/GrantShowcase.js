// Dependencies
import React from "react";

// Objects

// Styles

const GrantShowcase = props => {
  console.log("GrantShowcase props", props);
  return (
    <div className="grant-showcase">
      <h2>{props.grant.competition_name}</h2>
      <div>{props.grant.amount}</div>
      <div>{props.grant.area_focus}</div>
    </div>
  );
};

export default GrantShowcase;
