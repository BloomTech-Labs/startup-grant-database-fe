// Dependencies
import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

// Objects
import { selectGrant } from "../../actions";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import EditIcon from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EditGrantDialog from "../dialogs/EditGrantDialog";
import { grantStyles } from "../../styles/grantStyles";
export const Grant = props => {
  const selectGrant = () => {
    props.selectGrant(props.grant);
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
  return (
    // Checks if card is currently selected and if its been reviewed
    <Card
      className={`${
        props.grantShowcase.id === props.grant.id
          ? styles.grantCardSelected
          : styles.grantCard
      } ${!props.grant.is_reviewed && styles.grant_new}`}
      onClick={selectGrant}
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
        {props.inAdmin ? (
          <EditGrantDialog className={styles.editIcon} grant={props.grant} />
        ) : // <BookmarkBorderOutlinedIcon className={styles.bookmark} />
        null}
      </div>
    </Card>
  );
};

const mapStateToProps = ({ grantShowcase, currentUser }) => {
  return {
    grantShowcase,
    currentUser
  };
};

export default connect(
  mapStateToProps,
  { selectGrant }
)(Grant);
