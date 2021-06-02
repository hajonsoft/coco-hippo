import { configureStore } from '@reduxjs/toolkit'
import reducer from './cocoSlice';
export default configureStore({
    reducer,
})