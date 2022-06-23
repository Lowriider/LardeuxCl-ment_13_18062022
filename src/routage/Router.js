import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ErrorNotFound from "../js/Pages/ErrorNotFound";
import Index from "../js/Pages/Index";
import MainLayout from "../js/Layouts/MainLayout";
import SignIn from "../js/Pages/SignIn";
import User from "../js/Pages/User";

const Router = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/user" element={<User/>}/>
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
