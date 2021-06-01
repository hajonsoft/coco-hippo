import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import RoomIcon from '@material-ui/icons/Room';

const LocationPin = ({ text }) => (
    <div>
        <Grid container alignItems="center">
            <Grid item>
                <RoomIcon />
            </Grid>
            <Grid item>
                <Typography variant="h6">
                    {text}
                </Typography>
            </Grid>
        </Grid>
    </div>
)

export default LocationPin