import React, { Fragment } from "react"
import { connect } from 'react-redux'

import { Grid, Typography, TextField, Divider } from "@material-ui/core";

const InfoForm = props => {

    return (
        <Fragment>
            <Typography variant="h5" className={aClass}>
                Grant Info
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={3} className={aClass}>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Grant Name"
                    type="text"
                    name="competition_name"
                    placeholder="Grant Name"
                    value={null}
                    onChange={null}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    label="Website"
                    type="url"
                    fullWidth
                    name="website"
                    placeholder="Website"
                    value={null}
                    onChange={null}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    label="Amount"
                    type="number"
                    name="amount"
                    fullWidth
                    placeholder="Amount"
                    value={null}
                    onChange={null}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    label="Amount Notes"
                    type="text"
                    name="amount_notes"
                    multiline
                    fullWidth
                    rows="3"
                    placeholder="Amount Notes"
                    value={null}
                    onChange={null}
                    variant="outlined"
                />
                </Grid>
            </Grid>

        </Fragment>
    )

}

export default InfoForm