import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const MainLayout = ({children}) => {
    return (
        <>
            <HeaderLayout/>
                {children}
            <FooterLayout/>
        </>
    )
}
export default MainLayout
