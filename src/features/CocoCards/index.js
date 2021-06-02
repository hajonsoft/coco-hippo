import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import CocoCard from './components/CocoCard';

const CocoCards = () => {

    const data = useSelector(state => state);
    const robotKeys = Object.keys(data.robots);

    return (
        <Box p={2} style={{ width: '100%' }}>
            <Grid container alignItems="center" spacing={2}>
                {
                    robotKeys.map(key =>
                        <Grid item>
                            <CocoCard name={key} />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default CocoCards
