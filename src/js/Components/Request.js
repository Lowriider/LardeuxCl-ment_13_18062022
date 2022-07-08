import axios from "axios";
import {userAuthSucceeded, userAuthFailed} from "../Features/auth/loginSlice";
import {userProfileFailed, userProfileSucceeded, userProfileUpdate} from "../Features/profile/profileSlice";


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
        dispatch(userProfileSucceeded(response.data))
    } catch (error) {
        dispatch(userProfileFailed(error.response.data.message))
        console.log(error)
    }
}

export const updateProfile = (token, newFirstName, newLastName) => async (dispatch) => {
        try {

            const response = await axios.put(
                'http://localhost:3001/api/v1/user/profile',
                { firstName: newFirstName, lastName: newLastName },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            dispatch(userProfileUpdate(response.data))
        } catch (error) {
            console.log(error)
            dispatch(userProfileFailed(error.response.data.message))
        }
    }

export const logout = () => async (dispatch) => {
    dispatch(userLogout())
    dispatch(userProfileReset)
}
