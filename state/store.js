import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import googleReducer from './google/googleSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        google: googleReducer
    },
})