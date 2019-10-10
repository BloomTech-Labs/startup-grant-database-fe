// Dependencies
import React from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import Moment from "react-moment";
import moment from "moment";

// Objects
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import LanguageIcon from "@material-ui/icons/Language";
// import Modal from "@material-ui/core/Modal";
// import Fade from "@material-ui/core/Fade";
// import Backdrop from "@material-ui/core/Backdrop";
// import BookmarkIcon from "@material-ui/icons/Bookmark";
import Typography from "@material-ui/core/Typography";
import SuggestionDialog from "./dialogs/SuggestionDialog";

// =========== STYLES ===========
import { showcaseStyles } from "../../styles/grantShowcaseStyles";

export const GrantShowcase = props => {
  const classes = showcaseStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  // console.log("moment test", momentDeadline);

  if (props.isFetching) {
    return <Loader type="Triangle" color="#3DB8B3" height="200" width="200" />;
  }

  return (
    <Card className={classes.showcaseCard}>
      {/* ================= Top container ================= */}
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.topContent}
        >
          <Grid
            container
            className={classes.showcase_header}
            alignItems="center"
          >
            <Grid item>
              <div className={classes.grant_logo}></div>
            </Grid>
            <Grid item>
              <Typography
                className={classes.grant_name}
                variant="h4"
                component="h4"
              >
                {props.grant.competition_name}
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Grid item>
              <BookmarkBorderOutlinedIcon
                className={classes.bookmark}
              ></BookmarkBorderOutlinedIcon>
              {/* <BookmarkIcon></BookmarkIcon> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justify="flex-start"
          alignItems="flex-end"
          alignContent="flex-end"
        >
          <LanguageIcon className={classes.website}></LanguageIcon>
          <span className={classes.website}>Visit Website:</span>
          <a href={props.grant.website} target="_blank">
            {props.grant.website}
          </a>
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
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.topContent}
      >
        <Grid item>
          <a href={props.grant.website} target="_blank">
            <Button
              className={classes.applyButton}
              variant="contained"
              color="primary"
            >
              Apply to Grant
            </Button>
          </a>
        </Grid>
        <Grid item>
          <SuggestionDialog id={props.grant.id} />
        </Grid>
      </Grid>
    </Card>
  );
};

const mapStateToProps = state => {
  // console.log("GrantShowcase mapStateToProps state", state);
  return {
    grant: state.grantShowcase,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  {}
)(GrantShowcase);
