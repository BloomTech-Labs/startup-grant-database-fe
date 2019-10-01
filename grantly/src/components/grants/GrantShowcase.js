// Dependencies
import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import moment from "moment";

// Objects
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

import BookmarkIcon from "@material-ui/icons/Bookmark";

import Typography from "@material-ui/core/Typography"

// =========== STYLES ===========
import {showcaseStyles} from "../../styles/grantShowcaseStyles"


export const GrantShowcase = props => {
  const classes = showcaseStyles();

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
  // console.log("GrantShowcase props", props);

  if (props.isFetching) {
    return <div></div>;
  }

  return (
    <Card className={classes.showcaseCard}>
      {/* ================= Bookmark Icon ================= */}

      {/* ================= Top container ================= */}
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.topContent}
        >
          <Grid container className={classes.showcase_header} alignItems="center">
            <Grid item>

            <div className={classes.grant_logo}></div>
            </Grid>
          <Grid item>
            <Typography variant="h4" component="h4" display="inline-block">
              {props.grant.competition_name}
            </Typography>

          </Grid>
          </Grid>
          <Grid direction="row" justify="flex-end" alignItems="flex-start">
            <Grid item>
              <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
              {/* <BookmarkIcon></BookmarkIcon> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <a href="/">https://www.mercatus.org/emergentventures</a>
        </Grid>
        <Grid item>
        <Button
      className={classes.applyButton}
      variant="contained"
      color="primary"
    >
      Apply to Grant
    </Button>
  
          <Button
            className={classes.applyButton}
            variant="contained"
            color="primary"
          >
            Edit Grant
          </Button>
        </Grid>
        </div>
      {/* ================= Main content ================= */}

      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="flex-start"
        className={classes.grantInfo}
      >
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>What it is: </span>{" "}
          {props.grant.amount
            ? props.grant.amount_notes
            : "See website for details"}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Deadline: </span>
          {deadline}
          {momentDeadline}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>
            This grant is in the areas of:{" "}
          </span>
          {props.grant.domain_areas}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Focus Area: </span>
          {props.grant.area_focus}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Region: </span>
          {props.grant.geographic_region}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Sponsored by: </span>
          {props.grant.sponsoring_entity}
        </Grid>
        <Grid item className={classes.showcaseDetails}>
          <span className={classes.showcaseSpan}>Notes: </span>
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
