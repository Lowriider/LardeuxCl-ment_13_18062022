import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ErrorNotFound from "../js/Pages/ErrorNotFound";
import Home from "../js/Pages/Home";
import MainLayout from "../js/Layouts/MainLayout";
import SignIn from "../js/Pages/SignIn";
import Profile from "../js/Pages/Profile";

const Router = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/sign-out" element={<Home/>}/>
                    <Route
                        path="*"
                        element={<ErrorNotFound/>}
                    />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router
