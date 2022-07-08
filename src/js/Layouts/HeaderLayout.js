import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../Components/Request";

const HeaderLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userAuth = useSelector((state) =>  state.login)

    const userData = useSelector((state) => state.profile)

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" onClick={logoutHandler}>
                <img
                    className="main-nav-logo-image"
                    src="/images/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {
                !userAuth.isAuth ?
                    <div>
                        <Link className="main-nav-item" to={`/sign-in`}>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div> :
                    <div>
                        <Link className="main-nav-item" to={`/profile`}>
                            <i className="fa fa-user-circle"></i>
                            {userData.firstName}
                        </Link>
                        <a className="main-nav-item" onClick={logoutHandler}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </a>
                    </div>
            }
        </nav>
    )
}
export default HeaderLayout
