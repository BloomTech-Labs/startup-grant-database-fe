// Dependencies
import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import Loader from "react-loader-spinner";

import Moment from "react-moment";
import moment from "moment";

// Objects
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import EditGrantDialog from "./dialogs/EditGrantDialog";

// =========== STYLES ===========
import { showcaseStyles } from "../../styles/grantShowcaseStyles";
import { suggestionStyles } from "../../styles/suggestionStyles";

export const GrantShowcase = props => {
  const showcase = showcaseStyles();
  const suggestion = suggestionStyles();

  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // ===== not needed? =====

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // function formatNumbers(num) {
  //   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

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
                <div className={showcase.grant_logo}></div>
              </Grid>
              <Grid item>
                <Typography
                  className={showcase.grant_name}
                  variant="h4"
                  component="h4"
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
            <span className={showcase.website}>Visit Website:</span>
            <a href={props.grant.website} target="_blank">
              {props.grant.website}
            </a>

            <Grid item>
              <a href={props.grant.website} target="_blank">
                <Button
                  className={showcase.applyButton}
                  variant="contained"
                  color="primary"
                >
                  Apply to Grant
                </Button>
              </a>

              {/* <Button
            className={showcase.applyButton}
            variant="contained"
            color="primary"
            >
            Edit Grant
          </Button> */}
            </Grid>
          </Grid>
        </div>
        {/* ================= Main content ================= */}

        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
          className={showcase.grantInfo}
        >
          <Grid item className={showcase.showcaseDetails}>
            <span className={showcase.showcaseSpan}>What it is: </span>{" "}
            {props.grant.amount
              ? props.grant.amount_notes
              : "See website for details"}
          </Grid>
          <Grid item className={showcase.showcaseDetails}>
            <span className={showcase.showcaseSpan}>Deadline: </span>
            {deadline}
            {momentDeadline}
          </Grid>
          <Grid item className={showcase.showcaseDetails}>
            <span className={showcase.showcaseSpan}>
              This grant is in the areas of:{" "}
            </span>
            {props.grant.domain_areas}
          </Grid>
          <Grid item className={showcase.showcaseDetails}>
            <span className={showcase.showcaseSpan}>Focus Area: </span>
            {props.grant.area_focus}
          </Grid>
          <Grid item className={showcase.showcaseDetails}>
            <span className={showcase.showcaseSpan}>Region: </span>
            {props.grant.geographic_region}
          </Grid>
          <Grid item className={showcase.showcaseDetails}>
            <span className={showcase.showcaseSpan}>Sponsored by: </span>
            {props.grant.sponsoring_entity}
          </Grid>
          <Grid item className={showcase.showcaseDetails}>
            <span className={showcase.showcaseSpan}>Notes: </span>
            {props.grant.notes}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={showcase.topContent}
        >
          {/* <Grid item>
            <Button
              className={showcase.applyButton}
              variant="contained"
              color="primary"
            >
              Apply to Grant
            </Button>
          </Grid> */}
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
