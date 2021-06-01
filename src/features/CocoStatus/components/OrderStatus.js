import { Box } from '@material-ui/core'
import React from 'react'

const OrderStatus = ({ item, description }) => {
    return (
        <Box>
            {`${item}: ${description}`}
        </Box>
    )
}

export default OrderStatus
