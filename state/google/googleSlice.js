import { createSlice } from "@reduxjs/toolkit";

export const googleSlice = createSlice({
    name: 'google',
    initialState: {
        access_token: null,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.access_token = action.payload
        }
    }
});

export const { setAccessToken } = googleSlice.actions
export default googleSlice.reducer