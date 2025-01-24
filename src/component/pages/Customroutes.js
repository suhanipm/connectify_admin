import { Route,Routes } from "react-router-dom";

import Login from "./Login";
import Admin from "./Admin";
import Home from "./Home";
import StudentDatabase from "./StudentDatabase";
import User from "./Users";
import Post from "./Post";
import Editstudent from "./Editstudent";
import Addstudent from "./Addstudent";
import Addadmin from "./Addadmin";
import Staff from "./Staff";
import AddStaff from "./Addstaff";
import EditStaff from "./Editstaff";
import Blockeduser from "./Blockeduser";
import Group from "./Group";
import Creategroup from "./Creategroup";

function Customeroutes(){
    return(
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/student-database" element={<StudentDatabase></StudentDatabase>} />
            {/* <Route path="/comments" element={<Admin></Admin>} /> */}
            <Route path="/Addadmin" element={<Addadmin></Addadmin>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/User" element={<User></User>}></Route>
            <Route path="/Editstudent/:studentId" element={<Editstudent></Editstudent>}></Route>
            <Route path="/Addstudent" element={<Addstudent></Addstudent>}></Route>
            <Route path="/Staff" element={<Staff></Staff>}></Route>
            <Route path="/posts" element={<Post></Post>}></Route>
            <Route path="/EditStaff/:staffId" element={<EditStaff></EditStaff>}></Route>
            <Route path="/AddStaff" element={<AddStaff></AddStaff>}></Route>
            <Route path="/groups" element={<Group></Group>}></Route>
            <Route path="/Blockeduser" element={<Blockeduser></Blockeduser>}></Route>
            <Route path="/creategroup" element={<Creategroup></Creategroup>}></Route>
        </Routes>
    )
}

export default Customeroutes;