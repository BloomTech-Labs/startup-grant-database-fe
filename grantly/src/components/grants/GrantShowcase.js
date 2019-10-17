// Dependencies
import React from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import Moment from "react-moment";
import moment from "moment";

// Objects
import { Card, Grid, Button, Typography, Divider } from "@material-ui/core";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import SuggestionDialog from "./dialogs/SuggestionDialog";
import EditGrantDialog from "./dialogs/EditGrantDialog";

// =========== STYLES ===========
import { showcaseStyles } from "../../styles/grantShowcaseStyles";

export const GrantShowcase = props => {
  console.log("GrantShowcase props", props);

  const showcase = showcaseStyles();

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

  if (props.isFetching) {
    return <Loader type="Triangle" color="#3DB8B3" height="200" width="200" />;
  }

  return (
    <div>
      <Card
        className={
          props.inAdmin
            ? `${showcase.showcaseCard} ${showcase.inAdmin}`
            : showcase.showcaseCard
        }
      >
        {/* ================= Top container ================= */}
        <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={showcase.topContent}
          >
            <Grid
              container
              className={showcase.showcase_header}
              alignItems="center"
            >
              <Grid item>
                <Typography
                  className={showcase.grant_name}
                  variant="h5"
                  component="h5"
                >
                  {props.grant.competition_name}
                </Typography>
              </Grid>
            </Grid>

            <Grid>
              <Grid item>
                {props.inAdmin ? (
                  <EditGrantDialog
                    className={showcase.editIcon}
                    grant={props.grant}
                  />
                ) : (
                  <BookmarkBorderOutlinedIcon className={showcase.bookmark} />
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-start"
            alignItems="flex-end"
            alignContent="flex-end"
          >
            <LanguageIcon className={showcase.website}></LanguageIcon>

            <a href={props.grant.website} target="_blank">
              {props.grant.website}
            </a>

            {/* <Grid item>
              <a href={props.grant.website} target="_blank">
                <Button
                  className={showcase.applyButton}
                  variant="contained"
                  color="primary"
                >
                  Apply to Grant
                </Button>
              </a>
              {!props.inAdmin && (
                <Grid item>
                  <SuggestionDialog id={props.grant.id} />
                </Grid>
              )}
            </Grid> */}
          </Grid>
        </div>
        {/* ================= Main content ================= */}
        <Grid container direction="row" className="headers-1">
          <Grid item className={showcase.showcaseDetailsTop} xs={2}>
            <Grid className={showcase.showcaseSpan}>Amount:</Grid>
            <Grid className={showcase.innerDetails}>
              {props.grant.amount
                ? "$" + formatNumbers(props.grant.amount)
                : "See website for details"}
            </Grid>
          </Grid>
          <Grid item xs={4} className={showcase.showcaseDetailsTop}>
            <Grid className={showcase.showcaseSpan}>Deadline:</Grid>
            <Grid className={showcase.innerDetails}>{momentDeadline}</Grid>
          </Grid>
          <Grid item xs={5} className={showcase.showcaseDetailsTop}>
            <Grid className={showcase.showcaseSpan}>Grant Categories:</Grid>
            <Grid className={showcase.innerDetails}>
              {props.grant.domain_areas}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="headers-2">
          <Grid item xs={2} className={showcase.showcaseDetailsBottom}>
            <Grid className={showcase.showcaseSpan}>Region:</Grid>
            <Grid className={showcase.innerDetails}>
              {" "}
              {props.grant.geographic_region}
            </Grid>
          </Grid>
          <Grid item xs={4} className={showcase.showcaseDetailsBottom}>
            <Grid className={showcase.showcaseSpan}>Focus Area:</Grid>
            <Grid className={showcase.innerDetails}>
              {props.grant.area_focus}
            </Grid>
          </Grid>
          <Grid item xs={5} className={showcase.showcaseDetailsBottom}>
            <Grid className={showcase.showcaseSpan}>Sponsor:</Grid>
            <Grid className={showcase.innerDetails}>
              {" "}
              {props.grant.sponsoring_entity}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={showcase.headersThree}>
          <Grid item>
            <Grid className={showcase.showcaseSpan}>Notes:</Grid>
            <Grid className={showcase.innerDetails}>{props.grant.notes}</Grid>
          </Grid>
        </Grid>
        <Divider color="primary" />

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={showcase.topContent}
        >
          <Grid item>
            <Button
              className={showcase.applyButton}
              variant="contained"
              color="primary"
            >
              Apply to Grant
            </Button>
          </Grid>
          {!props.inAdmin && (
            <Grid item>
              <SuggestionDialog id={props.grant.id} />
            </Grid>
          )}
        </Grid>
      </Card>
    </div>
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
