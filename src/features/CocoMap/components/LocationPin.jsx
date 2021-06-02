import { Grid, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import React from 'react';
import { stateColors } from '../../../util/colors';

const LocationPin = ({ text, robotData, orderData }) => (
    <div style={{ width: '300px' }}>
        <Grid container alignItems="center" spacing={1}>
            <Grid item>
                <RoomIcon style={{ color: stateColors[`${robotData?.state}`] }} />
            </Grid>
            <Grid item>
                <Typography variant="h6">
                    {text}
                </Typography>
            </Grid>
            {orderData && <Grid item>
                <Typography variant="body2">
                    {`${orderData?.minutesSinceOrderPlaced} min`}
                </Typography>
            </Grid>}
        </Grid>
    </div>
)

export default LocationPin