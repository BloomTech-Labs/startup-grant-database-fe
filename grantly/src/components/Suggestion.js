// Dependencies
import React from "react";
import { connect } from "react-redux";
// import clsx from "clsx";

import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import { suggestionStyles } from "../styles/suggestionStyles";

import { deleteSuggestion, adminFetchApi } from "../actions/index";

export const Suggestion = props => {
  const suggestion = suggestionStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = () => {
    props.deleteSuggestion(props.request.id, props.currentUser);
    setTimeout(() => {
      props.adminFetchApi(props.currentUser);
    }, 500);
  };

  return (
    <ExpansionPanel className={suggestion.card}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={suggestion.subject}>
          {props.request.subject}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={suggestion.details}>
        <Typography className={suggestion.suggestion}>
          {props.request.suggestion}
        </Typography>
      </ExpansionPanelDetails>
      <Button
        className={suggestion.button}
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        Delete Suggestion
      </Button>
    </ExpansionPanel>
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
  { deleteSuggestion, adminFetchApi }
)(Suggestion);
