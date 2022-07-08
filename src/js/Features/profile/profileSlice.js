import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    success: false,
    firstName: '',
    lastName: ''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        userProfileSucceeded: (state, action) => {
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        },
        userProfileFailed: (state, action) => {
            state.error = action.payload
        },
        userProfileUpdate: (state, action) => {
            state.success = true
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        },
        userProfileReset: (state) => {
            state.firstName = null
            state.lastName = null
        }
    }
})

export const {userProfileSucceeded, userProfileFailed, userProfileUpdate, userProfileReset} = profileSlice.actions

export default profileSlice.reducer
