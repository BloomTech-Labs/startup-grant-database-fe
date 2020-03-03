import React, {Fragment} from "react";
import {Divider, Grid, TextField, Typography} from "@material-ui/core";

const GrantDemo = props => {
    return (
        <Fragment>
            <Typography variant="h5">Grant Demographics</Typography>
            <Divider variant="middle"/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        label="Geographic Region"
                        select
                        fullWidth
                        name="geographic_region"
                        placeholder="Geographic Region"
                        value={null}
                    >
                        {/* Maps through the array to return values for dropdown */}

                        {/* {geographicRegion.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem> */}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Target Demographic"
                        select
                        fullWidth
                        value={null}
                        name="target_entrepreneur_demographic"
                        placeholder="Target Entrepreneur Demographic"
                    >
                        {/* Maps through the array to return values for dropdown */}
                        {/*
              {targeDemographic.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Application Due Date"
                        fullWidth
                        type="date"
                        name="most_recent_application_due_date"
                        value={null}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={null}
                        label="Early Stage Funding"
                        select
                        fullWidth
                        name="early_stage_funding"
                        placeholder="Early Stage Funding"
                    >
                        {/* Maps through the array to return values for dropdown */}
                        {/* {.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        type="text"
                        name="notes"
                        multiline
                        fullWidth
                        rows="3"
                        placeholder="Please provide a description of the grant here!"
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default GrantDemo;
