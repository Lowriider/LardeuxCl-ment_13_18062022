import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {handleAuthRequest} from "../Components/Request";
import {useDispatch, useSelector} from "react-redux";

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const userAuth = useSelector((state) => state.login)

   const error = useSelector((state) => state.login)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAuthRequest(formData.email, formData.password))
    }

    useEffect(() => {
        if (userAuth.isAuth) {
            navigate('/profile')
        }
    }, [userAuth.isAuth, navigate])

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label
                        ><input onChange={(e) => setFormData({...formData, email: e.target.value})} type="text"
                                id="email"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input onChange={(e) => setFormData({...formData, password: e.target.value})} type="password"
                                id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <div className="error-msg">
                        {error.error}
                    </div>
                    <button className="sign-in-button"><i
                        className="fa fa-user-circle"></i>Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}
export default SignIn
