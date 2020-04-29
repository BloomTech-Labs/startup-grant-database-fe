import React from "react";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { Divider, Grid, Paper, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingBottom: "2em",
    paddingTop: "1.5em",
    paddingLeft: "5px",
    display: "flex",
    textAlign: "left",
  },
  layout: {},
  subtitle: { fontWeight: "600", padding: "0.5em 0em" },
  card: {
    marginTop: "2em",
    marginBottom: "2em",
  },
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
    data: [],
  },
];

export const UserSettingsForm = (props) => {
  const styles = useStyles();

  return (
    <>
      <Divider variant="middle" />
      <Container className={styles.card}>
        <form onSubmit={props.handleSubmit}>
          <Grid container spacing={4} className={styles.formContainer}>
            {userSettingsFormData.map((data) => {
              return (
                <TextFormField
                  label={data.label}
                  type={data.type}
                  name={data.name}
                  multiline={data.multiline}
                  rows={data.rows}
                  variant={data.variant}
                  sm={12}
                  data={data.data}
                  handleChanges={props.handleChange}
                  value={props.values}
                />
              );
            })}
          </Grid>
        </form>
      </Container>
    </>
  );
};
