import React from "react";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { Grid, Typography, Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: theme.spacing(2, 6, 1, 6)
  }
}));

const userSettingsFormData = [
  { label: "Password", type: "password", name: "password", data: [] }
];

export const UserSettingsForm = props => {
  const styles = useStyles();
  return (
    <Paper>
      <Typography>User Settings</Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.formContainer}>
        {userSettingsFormData.map(data => {
          return (
            <TextFormField
              label={data.label}
              type={data.type}
              name={data.name}
              sm={6}
              data={data.data}
            />
          );
        })}
      </Grid>
    </Paper>
  );
};
