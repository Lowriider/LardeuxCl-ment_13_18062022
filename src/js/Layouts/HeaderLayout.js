import {Link} from "react-router-dom";

const HeaderLayout = () => {
    const isConnected = false
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="/images/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {
                !isConnected ?
                    <div>
                        <Link className="main-nav-item" to={`/sign-in`}>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div> :
                    <div>
                        <a className="main-nav-item" href="./user.html">
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </a>
                        <a className="main-nav-item" href="./index.html">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </a>
                    </div>
            }
        </nav>
    )
}
export default HeaderLayout
