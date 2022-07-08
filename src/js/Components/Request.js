import axios from "axios";
import {useState} from "react";
import {userAuthSucceeded, loginSlice, userAuthFailed} from "../Features/auth/loginSlice";
import {userProfileSucceeded} from "../Features/profile/profileSlice";


export const handleAuthRequest = (email, password) => async (dispatch) => {
    // const [isLoading, setIsLoading] = useState(false)
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                email,
                password
            },
            {
                headers: {
                    'Content-type': 'application/json'
                }
            })
        dispatch(userAuthSucceeded(response.data.body.token))
        dispatch(userProfile(response.data.body.token))

    } catch (error) {
        console.log(error)
        dispatch(userAuthFailed(error.response.data.message))
    }
}

export const userProfile = (token) => async (dispatch) => {
    try {
        const response = await axios.post(
            'http://localhost:3001/api/v1/user/profile',
            {token},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        console.log(response)
        dispatch(userProfileSucceeded(response.data))
    } catch (error) {
        // dispatch({
        //     type: USER_PROFILE_FAIL,
        //     payload:
        //         error.response && error.response.data.message
        //             ? error.response.data.message
        //             : error.message,
        // })
        console.log(error)
    }
}
