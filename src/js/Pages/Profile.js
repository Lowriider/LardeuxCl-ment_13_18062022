import {useEffect, useState} from "react";
import Transaction from "../Components/Transaction";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const [isEditProfilVisible, setIsEditProfilVisible] = useState(false)
    const handleSubmitUpdateProfil = () => {

    }
    const userData = useSelector((state) => {
        return state.login
    })

    useEffect(() => {
        if (!userData.isAuth) {
            navigate('/')
        }
    }, [userData.isAuth, navigate])
    return (
        <main className="main bg-dark">
            <div className="header">
                {
                    !isEditProfilVisible ?
                    <>
                        <h1>Welcome back<br/>Tony Jarvis!</h1>
                        <button onClick={() => setIsEditProfilVisible(true)} className="edit-button">Edit Name</button>
                    </>:
                        <>
                        <h1>Welcome back</h1>
                            <form onSubmit={handleSubmitUpdateProfil}>
                                <div>
                                    <input type="text" placeholder="Tony"/>
                                    <input type="text" placeholder="Jarvis"/>
                                </div>
                                <div>
                                    <button>Save</button>
                                    <button>Cancel</button>
                                </div>
                            </form>
                        </>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Transaction/>
        </main>
    )
}
export default Profile
