// Dependencies
import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import moment from "moment";

// Objects
import grantStyles from "./styles/GrantStyles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

// Styles

const GrantShowcase = props => {
  console.log("GrantShowcase props", props);
  function formatNumbers(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const deadline = props.grant.most_recent_application_due_date ? (
    <Moment format={"MMMM Do YYYY"}>
      {props.grant.most_recent_application_due_date}
    </Moment>
  ) : (
    <div>See website for details</div>
  );

  const momentDeadline =
    props.grant.most_recent_application_due_date &&
    " or in about " +
      moment(props.grant.most_recent_application_due_date).fromNow();

  console.log("moment test", momentDeadline);

  const styles = grantStyles();
  if (props.isFetching) {
    return <div></div>;
  }

  // console.log("GrantShowcase props", props);

  return (
    <Card className={styles.showcase}>
      <h2>{props.grant.competition_name}</h2>
      <div className={styles.showcaseDetails}>
        <span className={styles.showcaseSpan}>What it is: </span>{" "}
        {props.grant.amount
          ? props.grant.amount_notes
          : "See website for details"}
      </div>
      <Grid item className={styles.showcaseDetails}>
        <span className={styles.showcaseSpan}>Deadline: </span>
        {deadline}
        {momentDeadline}
      </Grid>
      <Grid container direction="column">
        <Grid item className={styles.showcaseDetails}>
          <span className={styles.showcaseSpan}>
            This grant is in the areas of:{" "}
          </span>
          {props.grant.domain_areas}
        </Grid>
        <Grid item className={styles.showcaseDetails}>
          <span className={styles.showcaseSpan}>Focus Area: </span>
          {props.grant.area_focus}
        </Grid>
        <Grid item className={styles.showcaseDetails}>
          <span className={styles.showcaseSpan}>Region: </span>
          {props.grant.geographic_region}
        </Grid>
        <Grid item className={styles.showcaseDetails}>
          <span className={styles.showcaseSpan}>Sponsored by: </span>
          {props.grant.sponsoring_entity}
        </Grid>
        <Grid item className={styles.showcaseDetails}>
          <span className={styles.showcaseSpan}>Notes: </span>
          {props.grant.notes}
        </Grid>
      </Grid>
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
