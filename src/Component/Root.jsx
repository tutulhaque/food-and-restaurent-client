import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
// import Banner from "./Header/Banner";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;