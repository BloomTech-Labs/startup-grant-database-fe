import React from "react";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { Grid, makeStyles, Paper, Button, Typography } from "@material-ui/core";
import { EmailSingleValues } from "./values/EmailFormValues";

const emailFormStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3)
  },
  formInputs: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(3)
  }
}));

export const EmailFormSingle = () => {
  const styles = emailFormStyles();
  return (
    <form className={styles.form}>
      <Paper className={styles.paper}>
        <Typography variant="h3">Email To Single User</Typography>
        <Grid container className={styles.formInputs}>
          {EmailSingleValues.map(data => {
            return (
              <TextFormField
                label={data.label}
                type={data.type}
                name={data.name}
                select={data.select}
                data={data.data}
                //   sm={props.sm}
                multiline={data.multiline}
                variant={data.variant}
                rows={data.rows}
                value={data.name}
                //   handleChanges={props.handleChanges}
              />
            );
          })}
        </Grid>

        <Button variant="contained" color="secondary" className={styles.button}>
          Send To Single User
        </Button>
      </Paper>
    </form>
  );
};
