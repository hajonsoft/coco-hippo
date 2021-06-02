import { createSlice } from '@reduxjs/toolkit'
import data from './data/database.json';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {...data, selectedRobot: Object.keys(data.robots)?.[0]},
    reducers: {
        setRobotState: (state, action) => {
            state.robots[action.payload.robotKey].state = parseInt(action.payload.state);
        },
        assignOrderToRobot: (state, action) => {
            state.robots[action.payload.robotKey].assignedOrderId = action.payload.assignedOrderId;
        },
        selectRobot: (state, action) => {
            state.selectedRobot = action.payload
        },
    },
})

export const { setRobotState, assignOrderToRobot, selectRobot } = dataSlice.actions

export default dataSlice.reducer