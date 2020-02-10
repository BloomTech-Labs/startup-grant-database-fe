import React from "react";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { Grid, Typography, Divider, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ActionsContext } from "../../context/ActionsContext";
import { useAuth0 } from "../auth0/Auth0Wrapper";

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: "1em 8em 2em 8em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em"
    }
  },
  layout: {
    [theme.breakpoints.down("sm")]: {
      padding: "4em 0"
    }
  },
  title: {
    paddingTop: "1.5em"
  }
}));

const userSettingsFormData = [
  { label: "First Name", type: "text", name: "first_name", data: [] },
  { label: "Last Name", type: "text", name: "last_name", data: [] },
  { label: "Role", type: "text", name: "role", data: [] },
  { label: "Phone", type: "tel", name: "phone_number", data: [] },
  { label: "Project", type: "text", name: "company", data: [] },
  { label: "Project Website", type: "text", name: "company_url", data: [] },
  {
    label: "About Project",
    type: "text",
    name: "about",
    multiline: true,
    variant: "outlined",
    rows: "3",
    // styles: styles.about,
    data: []
  }
];

export const UserSettingsForm = props => {
  const styles = useStyles();
  const { token, currentUser } = useSelector(state => state.user);
  const { isAuthenticated } = useAuth0();
  const onSubmit = () => {
    actions.user.updateUser();
  };
  return (
    <Paper className={styles.layout}>
      <Typography variant="h6" className={styles.title}>
        Personal Details
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.formContainer}>
        {userSettingsFormData.map(data => {
          return (
            <TextFormField
              label={data.label}
              type={data.type}
              name={data.name}
              multiline={data.multiline}
              rows={data.rows}
              variant={data.variant}
              sm={6}
              data={data.data}
            />
          );
        })}
      </Grid>
      <Button variant="contained" color="primary">
        Save Changes
      </Button>
    </Paper>
  );
};
