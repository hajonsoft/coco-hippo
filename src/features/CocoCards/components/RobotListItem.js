import { Box } from '@material-ui/core'
import React from 'react'

const RobotListItem = ({ item, description }) => {
    return (
        <Box>
            {`${item}: ${description || ''}`}
        </Box>
    )
}

export default RobotListItem
