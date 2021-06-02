import React from 'react'
import { useSelector } from 'react-redux';
import RobotListItem from './RobotListItem';

const CardView = ({name}) => {

    const customerOrder =  useSelector(state => state.orders[state.robots[name]?.assignedOrderId]);

    return (
        <div>
            <RobotListItem item="Price" description={customerOrder?.totalPrice} />
            <RobotListItem item="Sub Total" description={customerOrder?.subtotalPrice} />
            <RobotListItem item="Items" description={customerOrder?.items} />
            <RobotListItem item="Phone" description={customerOrder?.customerPhone} />
            <RobotListItem item="Minutes" description={customerOrder?.minutesSinceOrderPlaced} />
        </div>
    )
}

export default CardView
