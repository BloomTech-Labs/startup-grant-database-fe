// Dependencies
import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Moment from "react-moment";
import moment from "moment";
import { useAuth0 } from "../../react-auth0-wrapper.js";

// Objects
import { Card, Grid, Button, Typography, Divider } from "@material-ui/core";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import SuggestionDialog from "../dialogs/SuggestionDialog";
import EditGrantDialog from "../dialogs/EditGrantDialog";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import DeleteIcon from "@material-ui/icons/Delete";

// Styles
import { showcaseStyles } from "../../styles/grantShowcaseStyles";
//Actions
import { submitFavorite } from "../../actions/index";

export const GrantShowcase = props => {
  console.log("showcase props:", props);
  const style = showcaseStyles();
  const { isAuthenticated } = useAuth0();
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

  // const onClickSave = (grants_id, token) => {
  //   props.saveFavorite(grants_id, token);
  //   submitFavorite(grants_id);
  // };

  console.log("GRANT SHOWCASE PROPS ====>", props);
  return (
    <div>
      <Card className={style.showcaseCard}>
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

            <Grid item>
              {props.inGrants ? (
                <Tooltip
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  title="Add to Favorites"
                >
                  <IconButton
                    aria-label="save"
                    onClick={() => {
                      console.log("Click grant ID", props.grant);
                      submitFavorite(props.grant.id);
                    }}
                  >
                    {/* onClick={() => onClickSave()}> */}
                    <BookmarkBorderOutlinedIcon
                      className={showcaseStyles.bookmark}
                    />
                  </IconButton>
                </Tooltip>
              ) : null}
            </Grid>
            <Grid item>
              {props.inFavorite ? (
                <Tooltip
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  title="Delete Favorites"
                >
                  <IconButton
                    aria-label="DeleteIcon"
                    onClick={() => console.log("click delete", props.grant)}

                    // onClick={() => onClickDelete()}
                  >
                    <DeleteIcon className={showcaseStyles.bookmark} />
                  </IconButton>
                </Tooltip>
              ) : null}
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-start"
            alignItems="flex-end"
            alignContent="flex-end"
          >
            <LanguageIcon className={style.website} />
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
          <Grid item xs={4} sm={5} md={2} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Amount</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.amount
                ? "$" + formatNumbers(props.grant.amount)
                : "See website for details"}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={5} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>
              Amount Details
            </Typography>
            <Typography className={style.innerDetails}>
              {props.grant.amount_notes}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={4} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Deadline</Typography>
            <Typography className={style.innerDetails}>
              {momentDeadline}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={2} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Region</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.geographic_region}
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10} md={5} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>
              Early Stage Funding Eligible?
            </Typography>
            <Typography className={style.innerDetails}>
              {props.grant.early_stage_funding ? "Yes" : "No"}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={4} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>
              Target Demographic
            </Typography>
            <Typography className={style.innerDetails}>
              {props.grant.target_entrepreneur_demographic}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={4} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Focus Area</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.area_focus}
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10} md={4} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Sponsor</Typography>
            <Typography className={style.innerDetails}>
              {props.grant.sponsoring_entity}
            </Typography>
          </Grid>
          {/* </Grid>

        <Grid container className={style.showcaseNotes}> */}
          <Grid item xs={12} sm={12} md={12} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Notes</Typography>
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
          className={style.showcaseButtonContainer}
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
          {isAuthenticated && (
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
    // grant: state.grantShowcase,
    isFetching: state.isFetching
    // favorites: state.favorites
  };
};

export default connect(mapStateToProps, {})(GrantShowcase);
