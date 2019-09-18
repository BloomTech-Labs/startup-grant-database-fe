// Dependencies
import React from "react";
import { connect } from "react-redux";

// Objects
import grantStyles from "./styles/GrantStyles";
import Card from "@material-ui/core/Card";

// Styles

const GrantShowcase = props => {
  console.log("GrantShowcase props", props);
  function formatNumbers(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const styles = grantStyles();
  if (props.isFetching) {
    return <div></div>;
  }

  // console.log("GrantShowcase props", props);

  return (
    <Card className={styles.showcase}>
      <h2>{props.grant.competition_name}</h2>
      <div>
        {" "}
        {props.grant.amount
          ? "$" + formatNumbers(props.grant.amount)
          : "See website for details"}
      </div>
      <div>{props.grant.area_focus}</div>
    </Card>
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
