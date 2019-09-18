// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

// Objects
import { selectGrant } from "../../actions";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import grantStyles from "./styles/GrantStyles";
import Card from "@material-ui/core/Card";

// Styles
import "../../App.scss";

const Grant = props => {
  console.log("Grant props", props);

  const selectGrant = () => {
    props.selectGrant(props.grant);
  };

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

  const styles = grantStyles();

  return (
    <Card className={styles.grantCard}>
      <Grid container justify="flex-end">
        <Grid item>
          <BookmarkIcon className="bookmark" />
        </Grid>
      </Grid>
      <h3>{props.grant.competition_name}</h3>
      <Grid container direction="column">
        <div item>Deadline</div>
        {deadline}
      </Grid>
      <Grid container direction="column">
        <div item>Amount</div>
        <div item>
          {props.grant.amount
            ? "$" + formatNumbers(props.grant.amount)
            : "See website for details"}
        </div>
      </Grid>
      <Container maxWidth="sm">
        <Button variant="contained" color="default" onClick={selectGrant}>
          Select
        </Button>
      </Container>
    </Card>
  );
};

export default connect(
  null,
  { selectGrant }
)(Grant);
