import React, { Fragment } from "react";
import { connect } from "react-redux";
import { postGrants, fetchApi } from "../../actions/index.js";
import { Grid, Typography, TextField } from "@material-ui/core";
import formStyles from "../../styles/FormStyles";

const GrantInfo = props => {
  const styles = formStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={styles.subjectHeader}>
        Grant Info
      </Typography>
      <hr className={styles.hr} />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            // id="outlined-name"
            fullWidth
            label="Competition Name"
            type="text"
            name="competition_name"
            placeholder="Competition Name"
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
        <Grid item xs={12}>
          <TextField
            label="Type"
            type="text"
            name="type"
            fullWidth
            placeholder="Type"
            value={props.grantInfo.type}
            onChange={props.handleChanges}
          />
        </Grid>
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
