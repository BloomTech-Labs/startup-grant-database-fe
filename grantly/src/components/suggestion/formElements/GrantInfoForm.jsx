import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import formStyles from "../formElements/formStyles";
import { Grid, Typography, TextField, Divider } from "@material-ui/core";
import { TextFormField } from "../formElements/TextFormField.jsx";

const useStyles = makeStyles(theme => ({
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 6)
  }
}));

const infoFieldData = [
  {
    label: "Grant Name",
    type: "text",
    name: "competition_name",
    multiline: false
  },
  { label: "Website", type: "url", name: "website", multiline: false },
  { label: "Amount", type: "number", name: "amount", multiline: false },
  {
    label: "Amount Notes",
    type: "text",
    name: "amount_notes",
    rows: "3",
    variant: "outlined",
    multiline: true
  }
];

export const GrantInfoForm = props => {
  const styles = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={null}>
        Grant Info
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        {infoFieldData.map(data => (
          <TextFormField
            label={data.label}
            type={data.type}
            name={data.name}
            rows={data.rows}
            variant={data.variant}
            multiline={data.multiline}
          />
        ))}
      </Grid>
    </Fragment>
  );
};
