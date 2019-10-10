// Dependencies
import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";

// Objects
import Grid from "@material-ui/core/Grid";
import { suggestionStyles } from "../styles/suggestionStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import { deleteSuggestion } from "../../actions/index";

export const Suggestion = props => {
  const styles = suggestionStyles();

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
            justifyContent="space-around"
            alignItems="center"
          >
            <Button
              className={showcase.applyButton}
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Reject
            </Button>
            <Button
              className={showcase.applyButton}
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
