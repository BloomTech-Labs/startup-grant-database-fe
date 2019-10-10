// Dependencies
import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { deleteSuggestion } from "../actions/index";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import { suggestionStyles } from "../styles/suggestionStyles";

export const Suggestion = props => {
  const suggestion = suggestionStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // ====== finish ======
  const handleSubmit = () => {
      deleteSuggestion()
  };

  return (
    <ExpansionPanel className={suggestion.card}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={suggestion.subject}>
            {props.grant.requests !== undefined
              ? props.grant.requests[0].subject
              : null}
          </Typography>
        </ExpansionPanelSummary>
        <Grid container direction="column" justify="center" alignItems="center">
          <ExpansionPanelDetails className={suggestion.details}>
            <Typography className={suggestion.suggestion}>
              {props.grant.requests !== undefined
                ? props.grant.requests[0].suggestion
                : null}
            </Typography>
          </ExpansionPanelDetails>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Button
              className={suggestion.button}
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Reject
            </Button>
            <Button
              className={suggestion.button}
              variant="contained"
              color="primary"
            >
              Accept
            </Button>
          </Grid>
        </Grid>
      </ExpansionPanel>
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
  {}
)(Suggestion);
