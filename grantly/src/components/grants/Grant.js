// Dependencies
import React from "react";
import { connect } from "react-redux";

// Objects

// Styles

const Grant = props => {
  console.log("Grant props", props);
  return (
    <div>
      <h2>{props.grant.id}</h2>
    </div>
  );
};

export default Grant;
