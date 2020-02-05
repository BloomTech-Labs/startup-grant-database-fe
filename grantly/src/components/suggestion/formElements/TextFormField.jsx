import React from "react";
import { Grid, TextField } from "@material-ui/core";

export const TextFormField = props => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        multiline={props.multiline}
        rows={props.rows}
        variant={props.variant}
        label={props.label}
        type={props.type}
        name={props.name}
        placeholder={props.label}
        value={null}
        onChange={null}
      />
    </Grid>
  );
};
