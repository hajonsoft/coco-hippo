import { Grid, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignOrderToRobot, setRobotState } from '../../../cocoSlice';
import { states } from '../../../util/states';

const CardEdit = ({ name }) => {

    const robot = useSelector(state => state.robots[name]);
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();

    const handleOnStateChange = (e) => {
        dispatch(setRobotState({robotKey: name, state: e.target.value}))
    }
    const handleOnOrderChange = (e) => {
        dispatch(assignOrderToRobot({robotKey: name, assignedOrderId: e.target.value}));
    }
    return (
        <Grid container >
            <Grid item xs={12}>
                <Select value={robot.state} onChange={handleOnStateChange}>
                    {Object.keys(states).map(stateKey => <MenuItem value={stateKey} >{states[stateKey]}</MenuItem>)}
                </Select>
            </Grid>
            <Grid item xs={12}>
                <Select value={robot.assignedOrderId} onChange={handleOnOrderChange}>
                    {Object.keys(orders).map(orderKey => <MenuItem value={orderKey} >{`${orderKey} ${orders[orderKey].items}`}</MenuItem>)}
                </Select>
            </Grid>

        </Grid>
    )
}

export default CardEdit
