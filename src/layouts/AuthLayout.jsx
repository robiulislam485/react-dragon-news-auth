import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
           <header className="w-11/12 mx-auto p-6">
            <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
