import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Grid, Typography} from "@material-ui/core";
import {TextFormField} from "../formElements/TextFormField.jsx";
import {InfoFieldData} from "../formUtils/formValues.js";

const useStyles = makeStyles(theme => ({
    bottomBox: {
        padding: theme.spacing(2, 6, 1, 6)
    }
}));

export const GrantInfoForm = props => {
    const styles = useStyles();
    return (
        <Fragment>
            <Typography variant="h5" className={null}>
                Grant Info
            </Typography>
            <Divider variant="middle"/>
            <Grid container spacing={3} className={styles.bottomBox}>
                {InfoFieldData.map(data => (
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
