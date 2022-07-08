import {configureStore} from '@reduxjs/toolkit'
import loginSlice from "../Features/auth/loginSlice";
import profileSlice from "../Features/profile/profileSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        profile: profileSlice,
    },
})
