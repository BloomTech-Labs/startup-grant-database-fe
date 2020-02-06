import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
// import { useGetToken } from "../../auth0/useGetToken.jsx";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Divider
} from "@material-ui/core";
import { DemoFormData } from "../formUtils/formValues.js";
import formStyles from "../formElements/formStyles";
import { TextFormField } from "../formElements/TextFormField.jsx";
const useStyles = makeStyles(theme => ({
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 6)
  }
}));

export const GrantDemoForm = props => {
  const styles = useStyles();
  // const [token] = useGetToken();

  return (
    <Fragment>
      <Typography variant="h5">Grant Demographics</Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        {DemoFormData.map(data => {
          return (
            <TextFormField
              label={data.label}
              type={data.type}
              name={data.name}
              select={data.select}
              data={data.data}
              sm={props.sm}
              inputLabel={data.inputLabel}
              multiline={data.multiline}
              variant={data.variant}
              rows={data.rows}
            />
          );
        })}
      </Grid>
    </Fragment>
  );
};
