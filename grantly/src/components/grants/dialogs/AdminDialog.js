// Dependencies
import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import { adminStyles } from "../../../styles/adminStyles";

import { putGrants, deleteGrants } from "../../../actions/index";

export const AdminDialog = props => {
  const styles = adminStyles();

  const approveGrant = () => {
    props.putGrants(
      { id: props.grant.id, is_reviewed: true },
      props.currentUser
    );
  };
  const rejectGrant = () => {
    props.deleteGrants(props.grant.id, props.currentUser);
  };
  if (props.isFetching) {
    return <Loader type="Triangle" color="#3DB8B3" height="100" width="100" />;
  }

  return (
    <>
      {!props.grant.is_reviewed && (
        <div>
          <Typography variant="h5" className={styles.adminActions}>
            Admin actions
          </Typography>
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={`${styles.approve} ${styles.buttons}`}
                onClick={approveGrant}
              >
                <CheckIcon />
                Approve
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={rejectGrant}
                variant="outlined"
                color="secondary"
                size="large"
                className={styles.buttons}
              >
                <CloseIcon />
                Reject
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    grant: state.grantShowcase,
    isFetching: state.isFetching,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { putGrants, deleteGrants }
)(AdminDialog);
