import React from "react";
import TextField from "@material-ui/core/TextField";

const EditGrantForm = props => {
  return (
    <TextField
      id="standard basic"
      style={{
        minWidth: "400px",
        fontFamily: "EB Garamond"
      }}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      multiline
    />
  );
};

export default EditGrantForm;
