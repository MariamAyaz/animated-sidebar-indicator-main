import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/navbar";

const AppLayout = () => {
    return <div style={{
        padding: '50px 10px 0px 360px'
    }}>
        {/* <Navbar/> */}
        <Sidebar />
        <Outlet/>
    </div>;
};

export default AppLayout;
