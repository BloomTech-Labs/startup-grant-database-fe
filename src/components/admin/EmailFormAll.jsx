import React from "react";
import { useSelector } from "react-redux";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { Grid, makeStyles, Paper, Button, Typography } from "@material-ui/core";
import { EmailAllValues } from "./values/EmailFormValues";
import ConfirmedModel from "../admin/ConfirmedModel";
import { useForm } from "../../hooks/useForm";

const emailFormStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3)
  },
  formInputs: {
    padding: theme.spacing(3)
  },
  formInput: {
    marginTop: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(3)
  }
}));

export const EmailFormAll = props => {
  const { token } = useSelector(state => state.user);
  //   const { isSuccess } = useSelector((state = state.admin));
  const [values, handleChange, handleSubmit, resetForm] = useForm(
    {
      subject: "",
      message: ""
    },
    doSubmit
  );
  const handleClose = () => {
    // actions.suggestion.resetSuccess();
    resetForm();
  };

  function doSubmit() {
    console.log(values);
    console.log("token", token);
    // actions.suggestion.addSuggestion(token, values);
  }
  const styles = emailFormStyles();
  return (
    <>
      <form className={styles.form}>
        <Paper className={styles.paper}>
          <Typography variant="h3">Email To All Users</Typography>

          <Grid container className={styles.formInputs}>
            {EmailAllValues.map(data => {
              return (
                <TextFormField
                  label={data.label}
                  type={data.type}
                  name={data.name}
                  select={data.select}
                  data={data.data}
                  className={styles.formInput}
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

          <Button
            variant="contained"
            color="secondary"
            className={styles.button}
          >
            Send To All Users
          </Button>
        </Paper>
      </form>
      <ConfirmedModel
        // isSuccess={isSuccess}
        handleClose={handleClose}
        title="Success!"
        message="All users have been sent the email"
      />
    </>
  );
};
