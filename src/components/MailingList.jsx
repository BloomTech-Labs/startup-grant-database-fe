import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3),
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      //   marginTop: theme.spacing(3)
      //   marginBottom: theme.spacing(6)
      // height: 1000,
      // position: "relative"
    }
  },
  button: {
    alignContent: "center",
    marginBottom: theme.spacing(6)
  }
}));

const MailingList = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <iframe
        height="550"
        width="550"
        title="mailing-list"
        src="https://cdn.forms-content.sg-form.com/fabf10c9-5733-11ea-9868-7e336812a6ff"
      />
      <Link to="/">
        <Button variant="contained" color="secondary" className={styles.button}>
          Return Home
        </Button>
      </Link>
    </Paper>
  );
};

export default MailingList;
