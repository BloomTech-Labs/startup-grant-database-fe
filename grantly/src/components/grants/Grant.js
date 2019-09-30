// Dependencies
import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

// Objects
import { selectGrant } from "../../actions";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import grantStyles from "./styles/GrantStyles";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



// Styles

export const Grant = props => {
  // console.log("Grant props", props);

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
    <div>See website for details</div>
  );

  const styles = grantStyles();

  return (
    <Card className={styles.grantCard}>
      {/* ================= Bookmark Icon ================= */}
      <CardContent>
      <Typography variant="h5" component="h2">
          be
  
        
        </Typography>
</CardContent>
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

export default connect(
  null,
  { selectGrant }
)(Grant);
