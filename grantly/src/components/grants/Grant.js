// Dependencies
import React, {useContext} from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { selectGrant, selectFavorite } from "../../actions";

// Components
// import EditGrantDialog from "../dialogs/EditGrantDialog";

// Material UI
// import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import EditIcon from "@material-ui/icons/Edit";
// import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// Styles
import { grantStyles } from "../../styles/grantStyles";
import {ActionsContext} from "../../context/ActionsContext";

export const Grant = props => {
  const actions = useContext(ActionsContext);
  // console.log("propsGrant", props);
  const selectData = function() {
    // if (props.inFavorite === true) {
    //   return props.selectFavorite(props.grant);
    // } else {
    //   return props.selectGrant(props.grant);
    // }
    actions.grants.selectGrant(props.grant)
  };

  // formats number with commas for display
  function formatNumbers(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Checks if due date is provided
  const deadline = props.grant.most_recent_application_due_date ? (
    <Moment format={"MMMM Do YYYY"}>
      {props.grant.most_recent_application_due_date}
    </Moment>
  ) : (
    <span>See website for details</span>
  );

  // Use to declare classes/styles
  const styles = grantStyles();
  const selectGrantID = function() {
    if (props.favoriteShowcase.id === null) {
      return props.grantShowcase.id;
    }
  };
  return (
    // Checks if card is currently selected and if its been reviewed

    // <Card
    //   className={`${
    //     props.grantShowcase.id === props.grant.id ||
    //     props.favoriteShowcase.id === props.grant.id
    //       ? styles.grantCardSelected
    //       : styles.grantCard
    //   } ${!props.grant.is_reviewed && styles.grant_new}`}
    //   onClick={selectData}
    // >

    <Card
      className={`${
        selectGrantID === props.grant.id
          ? styles.grantCardSelected
          : styles.grantCard
      } ${!props.grant.is_reviewed && styles.grant_new}`}
      onClick={selectData}
    >
      <div className={styles.grant_layout}>
        {/* <Grid item className={styles.grant_logo}></Grid> */}
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="space-between"
          className={
            props.grant.is_reviewed
              ? styles.grant_info
              : `${styles.grant_info} ${styles.grant_new}`
          }
        >
          <Typography
            variant="subtitle1"
            style={{ textAlign: "left" }}
            className={
              props.grant.is_reviewed
                ? styles.grantName
                : `${styles.grantName} ${styles.grant_new}`
            }
          >
            {props.grant.competition_name}
          </Typography>

          <Grid item>
            <Typography variant="body2" component="p">
              <a href={props.grant.website}>
                {/* only displays substring of website */}
                {props.grant.website.substring(0, 30)}...
              </a>
            </Typography>
          </Grid>

          <Typography variant="subtitle1" component="p">
            Deadline - <span className={styles.grant_subinfo}>{deadline}</span>
          </Typography>

          <Grid item>
            {" "}
            <Typography variant="subtitle1" component="p">
              Amount -{" "}
              <span className={styles.grant_subinfo}>
                {" "}
                {props.grant.amount
                  ? "$" + formatNumbers(props.grant.amount)
                  : "See website for details"}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ grantShowcase, favoriteShowcase, currentUser }) => {
  return {
    grantShowcase,
    favoriteShowcase,
    currentUser
  };
};

export default connect(mapStateToProps, { selectGrant, selectFavorite })(Grant);
