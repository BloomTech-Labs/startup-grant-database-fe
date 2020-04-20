import React from "react";
import {
  Avatar,
  Divider,
  Grid,
  Paper,
  Typography,
  Container,
} from "@material-ui/core";
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

const titles = [
  "First Name",
  "Last Name",
  "Role",
  "Phone Number",
  "Name of Project",
  "Project Link",
  "About Project",
];

export const UserData = ({ data, initialData, currentUser }) => {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Container className={styles.card}>
        <Divider variant="middle" />
        <Grid container spacing={4} className={styles.formContainer}>
          {Object.keys(initialData).map((key, i) => (
            <Grid item xs={12} key={key}>
              <Typography className={styles.subtitle}>
                {`${titles[i]}:`}
              </Typography>
              <Typography>{data[key]}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
