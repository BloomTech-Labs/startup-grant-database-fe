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
import { grantStyles } from "../../styles/GrantStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EditGrantDialog from "./dialogs/EditGrantDialog";
export const Grant = props => {
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
    <span>See website for details</span>
  );
  const styles = grantStyles();
  return (
    <Card
      className={`${
        props.grantShowcase.id === props.grant.id
          ? styles.grantCardSelected
          : styles.grantCard} ${!props.grant.is_reviewed && styles.grant_new}`
      }
      onClick={selectGrant}
    >
      <div className={styles.grant_layout}>
        {/* <Grid item className={styles.grant_logo}></Grid> */}
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="space-between"
          className={props.grant.is_reviewed ? styles.grant_info : `${styles.grant_info} ${styles.grant_new}`}
        >
          <Typography variant="subtitle1" className={props.grant.is_reviewed ? styles.grantName : `${styles.grantName} ${styles.grant_new}`}>
            {props.grant.competition_name}
          </Typography>
          <Grid item>
            <Typography variant="body2" component="p">
              {props.grant.website}
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
        ) : (
          <BookmarkBorderOutlinedIcon className={styles.bookmark} />
        )}
      </div>
      {/* <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Grid item>
          <BookmarkIcon></BookmarkIcon>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <div className={styles.grantName}>{props.grant.competition_name}</div>
        </Grid>
      </Grid>
      <Container className={styles.detailsWrapper}>
        <Grid container direction="column" className={styles.amount}>
          <div className={styles.detailsHeader}>Amount</div>
          <div>
            {props.grant.amount
              ? "$" + formatNumbers(props.grant.amount)
              : "See website for details"}
          </div>
        </Grid>
        <Grid container direction="column" className={styles.deadline}>
          <div className={styles.detailsHeader}>Deadline</div>
          {deadline}
        </Grid>
      </Container>
      <Container maxWidth="sm">
        <Button
          className={styles.btn}
          variant="contained"
          color="default"
          onClick={selectGrant}
        >
          Select
        </Button>
      </Container> */}
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
