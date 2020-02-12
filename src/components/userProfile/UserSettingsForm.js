import React, { useContext } from "react";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ActionsContext } from "../../context/ActionsContext";
import { useAuth0 } from "../auth0/Auth0Wrapper";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { logger } from "../../store/utils/logger";

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
  { label: "Phone", type: "tel", name: "phone", data: [] },
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
  logger("props", props);
  const styles = useStyles();
  const actions = useContext(ActionsContext);

  const { token, currentUser, pgUser } = useSelector(state => state.user);
  const { isAuthenticated } = useAuth0();

  return (
    <Paper className={styles.layout}>
      <Typography variant="h6" className={styles.title}>
        Personal Details
      </Typography>
      <Divider variant="middle" />
      <form onSubmit={props.handleSubmit}>
        <Grid container spacing={3} className={styles.formContainer}>
          {userSettingsFormData.map(data => {
            logger("value of TextFormField", props.values[data.name]);
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
                handleChanges={props.handleChange}
                values={props.values}
              />
            );
          })}
        </Grid>
      </form>
    </Paper>
  );
};
