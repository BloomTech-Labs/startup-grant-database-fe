import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Divider, Grid, Typography } from "@material-ui/core";
import { FocusFormData } from "../GrantData";
import { TextFormField } from "../../../suggestion/formElements/TextFormField";

const useStyles = makeStyles((theme) => ({
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 6),
  },
}));

export const GrantFocusForm = (props) => {
  const styles = useStyles();

  return (
    <Fragment>
      <Typography variant="h5">Foucus</Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        {FocusFormData.map((data) => {
          return (
            <TextFormField
              label={data.label}
              type={data.type}
              name={data.name}
              select={data.select}
              data={data.data}
              value={props.grantInfo}
              handleChanges={props.handleChanges}
            />
          );
        })}
        <Grid item xs={12}></Grid>
      </Grid>
    </Fragment>
  );
};
