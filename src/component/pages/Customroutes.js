import { Route,Routes } from "react-router-dom";

import Login from "./Login";
import Admin from "./Admin";
import Home from "./Home";
import StudentDatabase from "./StudentDatabase";
import User from "./Users";


function Customeroutes(){
    return(
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/student-database" element={<StudentDatabase></StudentDatabase>} />
            <Route path="/posts" element={<Posts></Posts>} />
            <Route path="/comments" element={<Comments></Comments>} />
            <Route path="/admin-management" element={<AdminManagement></AdminManagement>} />
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/User" element={<User></User>}></Route>
        </Routes>
    )
}

export default Customeroutes;