import React from "react";
import { Grid, TextField, MenuItem } from "@material-ui/core";

export const TextFormField = props => {
  // console.log("the data prop => ", props.data);
  console.log("props", props);
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        select={props.select}
        multiline={props.multiline}
        rows={props.rows}
        variant={props.variant}
        label={props.label}
        type={props.type}
        name={props.name}
        placeholder={props.label}
        value={null}
        onChange={null}
      >
        {props.data.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};
