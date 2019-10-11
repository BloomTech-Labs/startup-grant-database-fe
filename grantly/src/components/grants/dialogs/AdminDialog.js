// Dependencies
import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import { adminStyles } from "../../../styles/adminStyles";

import { deleteSuggestion, adminFetchApi } from "../../../actions/index";

export const AdminDialog = props => {
  const styles = adminStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = () => {
    props.deleteSuggestion(props.request.id);
    setTimeout(() => {
      props.adminFetchApi();
    }, 500);
  };

  return (
    <>
      <Typography variant="h5" className={styles.adminActions}>Admin Actions</Typography>
      <Grid container justify="center"  spacing={4}>
        <Grid item>
          <Button variant="outlined" color="secondary" size="large" className={styles.buttons}>
              <CloseIcon />
            Reject
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="large" className={`${styles.approve} ${styles.buttons}`}>
            <CheckIcon />
            Approve
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return {
    grant: state.grantShowcase,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { deleteSuggestion, adminFetchApi }
)(AdminDialog);
