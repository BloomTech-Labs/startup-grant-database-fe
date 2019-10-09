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

export const Suggestion = props => {	

  const styles = suggestionStyles();	

  const [expanded, setExpanded] = React.useState(false);	

  const handleExpandClick = () => {	
    setExpanded(!expanded);	
  };	

  return (	
    <Card	
    // conditional styling if card is selected	
    >	
      <Grid	
        container	
        direction="column"	
        justify="space-between"	
        alignItems="center"	
      >	
        <CardContent>	
          <Typography variant="body2" color="textSecondary" component="p">	
            This is the subject text	
          </Typography>	
        </CardContent>	
        <CardActions disableSpacing>	
          <IconButton	
            className={clsx(styles.expand, {	
              [styles.expandOpen]: expanded	
            })}	
            onClick={handleExpandClick}	
            aria-expanded={expanded}	
            aria-label="show more"	
          >	
            <ExpandMoreIcon />	
          </IconButton>	
        </CardActions>	
        <Collapse in={expanded} timeout="auto" unmountOnExit>	
          <CardContent>	
            <Typography paragraph>Method:</Typography>	
            <Typography paragraph>	
              This is the actual suggestion	
            </Typography>	
          </CardContent>	
        </Collapse>	
      </Grid>	
    </Card>	
  );	
};	

const mapStateToProps = ({ currentUser }) => {	
  return {	
    currentUser	
  };	
};	

export default connect(	
  mapStateToProps,	
  {}	
)(Suggestion);