import { Button, Card, CardActions, CardContent, CardHeader, Tooltip } from '@material-ui/core';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import { states } from '../../../util/states';
import OrderStatus from './OrderStatus';

const RoboStatus = ({ name, data, onSelectionChange }) => {
    const robot = data.robots[name];
    const customerOrder = data.orders[data.robots[name].assignedOrderId];

    return (
        <Card>
            <CardHeader title={name} subheader={states[robot.state]} onClick={() => onSelectionChange(robot)} />
            <CardContent onClick={() => onSelectionChange(robot)} >
                <OrderStatus item="Price" description={customerOrder?.totalPrice} />
                <OrderStatus item="Sub Total" description={customerOrder?.subtotalPrice} />
                <OrderStatus item="Items" description={customerOrder?.items} />
                <OrderStatus item="Phone" description={customerOrder?.customerPhone} />
                <OrderStatus item="Minutes" description={customerOrder?.minutesSinceOrderPlaced} />
            </CardContent>
            <CardActions>
                <Tooltip title={<pre>{JSON.stringify(robot, null, 2)}</pre>}>
                    <DirectionsCarOutlinedIcon />
                </Tooltip>
                <Tooltip title={<pre>{JSON.stringify(customerOrder, null, 2)}</pre>}>
                    <ShoppingCartOutlinedIcon />
                </Tooltip>
                <Button>Assign</Button>
                <Button>State</Button>
            </CardActions>
        </Card>
    )
}

export default RoboStatus
