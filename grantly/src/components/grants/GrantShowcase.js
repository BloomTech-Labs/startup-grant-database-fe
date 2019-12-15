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
import SuggestionDialog from "../dialogs/SuggestionDialog";
import EditGrantDialog from "../dialogs/EditGrantDialog";

// Styles
import { showcaseStyles } from "../../styles/grantShowcaseStyles";

export const GrantShowcase = props => {
  const style = showcaseStyles();

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
    return (
      <div className={style.loaderDiv}>
        <Loader type="Triangle" color="#3DB8B3" height="300" />
      </div>
    );
  }

  return (
    <div>
      <Card
        className={
          props.inAdmin
            ? `${style.showcaseCard} ${style.inAdmin}`
            : style.showcaseCard
        }
      >
        {/* ================= Top container ================= */}
        <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={style.topContent}
          >
            <Grid
              container
              className={style.showcase_header}
              alignItems="center"
            >
              <Grid item>
                <Typography
                  className={style.grant_name}
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
                    className={style.editIcon}
                    grant={props.grant}
                  />
                ) : //( <BookmarkBorderOutlinedIcon className={style.bookmark} />)
                null}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-start"
            alignItems="flex-end"
            alignContent="flex-end"
          >
            <LanguageIcon className={style.website}></LanguageIcon>

            <a href={props.grant.website} target="_blank">
              {props.grant.website}
            </a>

            {/* <Grid item>
              <a href={props.grant.website} target="_blank">
                <Button
                  className={style.applyButton}
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
          {/* <Divider color="primary" /> */}
        </div>
        {/* ================= Main content ================= */}
        <Grid
          container
          justify="space-between"
          direction="row"
          className={style.showcaseContainer}
        >
          <Grid item xs={4} sm={5} md={2} className={style.showcaseDetailsTop}>
            <Typography className={style.showcaseSpan}>Amount</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.amount
                ? "$" + formatNumbers(props.grant.amount)
                : "See website for details"}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={4} className={style.showcaseDetailsTop}>
            <Typography className={style.showcaseSpan}>Deadline</Typography>
            <Typography className={style.innerDetails}>
              {momentDeadline}
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10} md={5} className={style.showcaseDetailsTop}>
            <Typography className={style.showcaseSpan}>
              Grant Categories
            </Typography>
            <Typography className={style.innerDetails}>
              {props.grant.domain_areas}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between" className="headers-2">
          <Grid item xs={5} md={2} className={style.showcaseDetailsBottom}>
            <Typography className={style.showcaseSpan}>Region</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.geographic_region}
            </Typography>
          </Grid>
          <Grid item xs={5} md={4} className={style.showcaseDetailsBottom}>
            <Typography className={style.showcaseSpan}>Focus Area</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.area_focus}
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} className={style.showcaseDetailsBottom}>
            <Typography className={style.showcaseSpan}>Sponsor</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.sponsoring_entity}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={style.headersThree}>
          <Grid item xs={12}>
            <Typography className={style.showcaseSpan}>Notes</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.notes}
            </Typography>
          </Grid>
        </Grid>
        <Divider color="primary" />

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={style.topContent}
        >
          <Grid item>
            <a href={props.grant.website} target="_blank">
              <Button
                className={style.applyButton}
                variant="contained"
                color="primary"
              >
                Apply to Grant
              </Button>
            </a>
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
