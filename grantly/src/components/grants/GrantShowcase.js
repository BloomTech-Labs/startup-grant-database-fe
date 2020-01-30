// Dependencies
import React, { useEffect, useState } from "react";
import {connect, useSelector} from "react-redux";
import Loader from "react-loader-spinner";
import Moment from "react-moment";
import moment from "moment";
import { useAuth0 } from "../../react-auth0-wrapper.js";

// Objects
import { Card, Grid, Button, Typography, Divider } from "@material-ui/core";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import SuggestionDialog from "../dialogs/SuggestionDialog";
// import EditGrantDialog from "../dialogs/EditGrantDialog";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkIcon from "@material-ui/icons/Bookmark";

// Styles
import { showcaseStyles } from "../../styles/grantShowcaseStyles";
//Actions
import {
  submitFavorite,
  deleteFavorite,
  favoriteFetchApi
} from "../../actions/index";

export const GrantShowcase = props => {
  console.log("showcase props:", props);
  const {grants, showcase} = useSelector(state => state.grants);
  const style = showcaseStyles();
  const { isAuthenticated } = useAuth0();
  function formatNumbers(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {}, [props.favorites]);
  useEffect(()=> {
    console.log(`I was called with`, grants);
    if (grants.length === 0) {
      props.history.push('/');
    }
  }, []);

  const deadline = showcase.most_recent_application_due_date ? (
    <Moment format={"MMMM Do YYYY"}>
      {showcase.most_recent_application_due_date}
    </Moment>
  ) : (
    <div>See website for details</div>
  );

  const momentDeadline =
    showcase.most_recent_application_due_date &&
    " or in about " +
      moment(showcase.most_recent_application_due_date).fromNow();

  if (props.isFetching) {
    return (
      <div className={style.loaderDiv}>
        <Loader type="Triangle" color="#3DB8B3" height="300" />
      </div>
    );
  }

  const onClickSave = (id, currentUser) => {
    // console.log("imadeITTTT");
    props.submitFavorite(id, currentUser);
  };

  const onClickDelete = (id, currentUser) => {
    // console.log("DeleteMadeIT");
    props.deleteFavorite(id, currentUser);
  };

  // console.log("GRANT SHOWCASE PROPS ====>", props);
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
                  {showcase.competition_name}
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              {props.inGrants ? (
                <>
                  {/* {console.log("FAVORITES show", props.favorites)} */}
                  {props.favorites.length > 0 &&
                  props.favorites.filter(fav => {
                    // console.log("fav", fav);
                    // console.log("showcase", showcase);
                    return fav.id === showcase.id;
                  }).length ? (
                    <Tooltip
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title="In Favorites"
                    >
                      <BookmarkIcon aria-label="added to favorites" />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title="Add to Favorites"
                    >
                      <IconButton
                        aria-label="save"
                        onClick={() =>
                          onClickSave(showcase.id, props.currentUser)
                        }
                      >
                        <BookmarkBorderOutlinedIcon
                          className={showcaseStyles.bookmark}
                        />
                      </IconButton>
                    </Tooltip>
                  )}
                </>
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
                    onClick={() =>
                      onClickDelete(showcase.favoriteID, props.currentUser)
                    }
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
            <a href={showcase.website} target="_blank">
              {showcase.website}
            </a>
          </Grid>
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
              {showcase.amount
                ? "$" + formatNumbers(showcase.amount)
                : "See website for details"}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={5} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>
              Amount Details
            </Typography>
            <Typography className={style.innerDetails}>
              {showcase.amount_notes}
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
              {showcase.geographic_region}
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10} md={5} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>
              Early Stage Funding Eligible?
            </Typography>
            <Typography className={style.innerDetails}>
              {showcase.early_stage_funding ? "Yes" : "No"}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={4} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>
              Target Demographic
            </Typography>
            <Typography className={style.innerDetails}>
              {showcase.target_entrepreneur_demographic}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} md={4} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Focus Area</Typography>
            <Typography className={style.innerDetails}>
              {showcase.area_focus}
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10} md={4} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Sponsor</Typography>
            <Typography className={style.innerDetails}>
              {showcase.sponsoring_entity}
            </Typography>
          </Grid>
          {/* </Grid>

        <Grid container className={style.showcaseNotes}> */}
          <Grid item xs={12} sm={12} md={12} className={style.showcaseDetails}>
            <Typography className={style.detailTitle}>Notes</Typography>
            <Typography className={style.innerDetails}>
              {showcase.notes}
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
            <a href={showcase.website} target="_blank">
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
              <SuggestionDialog id={showcase.id} />
            </Grid>
          )}
        </Grid>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    favoriteFetchSuccess: state.favoriteFetchSuccess,
    addedFavorite: state.addedFavorite,
    // favorites: state.favorites
  };
};

export default connect(mapStateToProps, {
  submitFavorite,
  deleteFavorite,
  favoriteFetchApi
})(GrantShowcase);
