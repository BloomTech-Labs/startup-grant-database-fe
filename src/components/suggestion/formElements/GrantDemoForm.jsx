import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Grid, Typography} from "@material-ui/core";
import {DemoFormData} from "../formUtils/formValues.js";
import {TextFormField} from "../formElements/TextFormField.jsx";

const useStyles = makeStyles(theme => ({
    bottomBox: {
        padding: theme.spacing(2, 6, 1, 6)
    }
}));

export const GrantDemoForm = props => {
    const styles = useStyles();

    return (
        <Fragment>
            <Typography variant="h5">Grant Demographics</Typography>
            <Divider variant="middle"/>
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
                            value={props.grantInfo}
                            handleChanges={props.handleChanges}
                        />
                    );
                })}
            </Grid>
        </Fragment>
    );
};
