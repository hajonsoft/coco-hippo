import { Box, Button, Card, CardActions, CardContent, CardHeader, Tooltip } from '@material-ui/core';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRobot } from '../../../cocoSlice';
import { stateColors } from '../../../util/colors';
import { states } from '../../../util/states';
import CardEdit from './CardEdit';
import CardView from './CardView';


const CocoCard = ({ name }) => {
    const data = useSelector(state => state);
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    const onSelectionChange = (key) => {
        if (isEdit) {
            return;
        }

        dispatch(selectRobot(key));
    }

    const robot = data.robots[name];
    const customerOrder = data.orders[data.robots[name].assignedOrderId];

    return (
        <Box p={1} style={{ backgroundColor: stateColors[robot.state], width: '15rem' }}>
            <Card>
                <CardHeader title={name} subheader={states[robot.state]} onClick={() => onSelectionChange(name)} />
                <CardContent onClick={() => onSelectionChange(name)} >
                    {isEdit ? <CardEdit name={name} /> : <CardView name={name} />}
                </CardContent>
                <CardActions>
                    <Tooltip title={<pre>{JSON.stringify(robot, null, 2)}</pre>}>
                        <DirectionsCarOutlinedIcon />
                    </Tooltip>
                    {customerOrder && <Tooltip title={<pre>{JSON.stringify(customerOrder, null, 2)}</pre>}>
                        <ShoppingCartOutlinedIcon />
                    </Tooltip>}
                    {!isEdit && <Button onClick={() => setIsEdit(true)}>Edit</Button>}
                    {isEdit && <Button onClick={() => setIsEdit(false)} variant="contained">Done</Button>}
                </CardActions>
            </Card>
        </Box>

    )
}

export default CocoCard
