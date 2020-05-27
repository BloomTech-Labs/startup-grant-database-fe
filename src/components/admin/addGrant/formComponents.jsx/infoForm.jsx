import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Typography } from "@material-ui/core";
import { InfoFieldData } from "../GrantData";
import { TextFormField } from "../../../suggestion/formElements/TextFormField";

const useStyles = makeStyles((theme) => ({
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 6),
  },
}));

export const GrantInfoForm = (props) => {
  const styles = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={null}>
        Information
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        {InfoFieldData.map((data) => (
          <TextFormField
            label={data.label}
            type={data.type}
            name={data.name}
            rows={data.rows}
            variant={data.variant}
            multiline={data.multiline}
            data={data.data}
            value={props.grantInfo}
            handleChanges={props.handleChanges}
          />
        ))}
      </Grid>
    </Fragment>
  );
};
