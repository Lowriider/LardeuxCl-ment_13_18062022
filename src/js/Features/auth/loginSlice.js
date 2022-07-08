import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    token: "",
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userAuthSucceeded: (state, action) => {
            state.isAuth = true
            state.token = action.payload
        },
        userAuthFailed: (state, action) => {
            state.isAuth = false
            state.token = null
            state.error = action.payload
        },
        userLogout: (state) => {
            state.isAuth = false
            state.token = null
        }
    }
})

export const {userAuthSucceeded, userAuthFailed, userLogout} = loginSlice.actions

export default loginSlice.reducer
