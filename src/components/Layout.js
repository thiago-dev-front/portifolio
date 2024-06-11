import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

function Layout() {

    return (
        <>
        <Menu/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout