//Dependencies
import React, { Fragment } from "react";
import { connect } from "react-redux";

//Objects
import { postGrants, fetchApi } from "../../actions/index.js";
import { Grid, Typography, TextField, Divider } from "@material-ui/core";
import formStyles from "../../styles/formStyles";

const GrantInfo = props => {
  const styles = formStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={styles.subjectHeader}>
        Grant Info
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            // id="outlined-name"
            fullWidth
            label="Grant Name"
            type="text"
            name="competition_name"
            placeholder="Grant Name"
            value={props.grantInfo.competition_name}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Website"
            type="url"
            fullWidth
            name="website"
            placeholder="Website"
            value={props.grantInfo.website}
            onChange={props.handleChanges}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            label="Type"
            type="text"
            name="type"
            fullWidth
            placeholder="Type"
            value={props.grantInfo.type}
            onChange={props.handleChanges}
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            label="Amount"
            type="number"
            name="amount"
            fullWidth
            placeholder="Amount"
            value={props.grantInfo.amount}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Amount Notes"
            type="text"
            name="amount_notes"
            multiline
            fullWidth
            rows="3"
            placeholder="Amount Notes"
            value={props.grantInfo.amount_notes}
            onChange={props.handleChanges}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
const mapStateToProps = ({ grantData, isFetching, error }) => ({
  grantData,
  isFetching,
  error
});

export default connect(
  mapStateToProps,
  { postGrants, fetchApi }
)(GrantInfo);
