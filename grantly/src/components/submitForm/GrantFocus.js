import React, { Fragment } from "react";
import { Grid, Typography, TextField, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { postGrants, fetchApi } from "../../actions/index.js";
import formStyles from "../../styles/FormStyles";

const GrantFocus = props => {
  const styles = formStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={styles.subjectHeader}>
        Grant Focus
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            label="Sponsoring Entity"
            type="text"
            name="sponsoring_entity"
            fullWidth
            placeholder="Sponsoring Entity"
            value={props.grantInfo.sponsoring_entity}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Domain Areas"
            type="text"
            name="domain_areas"
            fullWidth
            placeholder="Domain Areas"
            value={props.grantInfo.domain_areas}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Area Focus"
            type="text"
            className={styles.inputText}
            name="area_focus"
            placeholder="Area Focus"
            fullWidth
            value={props.grantInfo.area_focus}
            onChange={props.handleChanges}
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
)(GrantFocus);
