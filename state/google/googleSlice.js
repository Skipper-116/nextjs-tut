import { createSlice } from "@reduxjs/toolkit";

export const googleSlice = createSlice({
    name: 'google',
    initialState: {
        googleAuth: null,
        currentUser: null,
    },
    reducers: {
        setGoogleAuth: (state, action) => {
            state.googleAuth = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
});

export const {setGoogleAuth, setCurrentUser} = googleSlice.actions
export default googleSlice.reducer