import { Box, Grid } from '@material-ui/core'
import React from 'react'
import RoboStatus from './components/RoboStatus'

const CocoStatus = ({ data, selectedRobot, onSelectionChange }) => {
    const handleOnSelected = (key) => {
        onSelectionChange(key)
    }

    return (
        <Box p={2} style={{ width: '100%' }}>
            <Grid container alignItems="center" justify="center" spacing={2}>
                {
                    Object.keys(data.robots).map(key =>
                        <Grid item>
                            <RoboStatus isSelected={key === selectedRobot} name={key} data={data} onSelectionChange={() => handleOnSelected(key)} />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default CocoStatus
