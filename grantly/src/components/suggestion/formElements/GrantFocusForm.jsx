import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  TextField,
  Divider,
  MenuItem
} from "@material-ui/core";
import formStyles from "../formElements/formStyles";
import { areaFocus } from "../formUtils/formValues.js";

const useStyles = makeStyles(theme => ({
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 6)
  }
}));

export const GrantFocusForm = props => {
  const styles = useStyles();

  return (
    <Fragment>
      <Typography variant="h5">Grant Focus</Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            label="Sponsoring Entity"
            type="text"
            name="sponsoring_entity"
            fullWidth
            placeholder="Sponsoring Entity"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Grant Categories"
            select
            name="area_focus"
            placeholder="Area Focus"
            fullWidth
          >
            {/* Maps through the array to return values for dropdown */}

            {areaFocus.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Fragment>
  );
};
