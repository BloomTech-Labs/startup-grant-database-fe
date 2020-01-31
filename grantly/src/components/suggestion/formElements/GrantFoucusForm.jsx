import React, { Fragment } from 'react'
import {
    Grid,
    Typography,
    TextField,
    Divider,
    MenuItem
  } from "@material-ui/core";

const FoucusForm = (props) => {

    return (
        <Fragment>
        <Typography variant="h5" >
          Grant Focus
        </Typography>
        <Divider variant="middle" />
        <Grid container spacing={3} >
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
    
            {/* {.map(option => ( 
                //     <MenuItem 

                //     </MenuItem>
                //   ))}*/}
            </TextField>
          </Grid>
        </Grid>
      </Fragment>
    )
}