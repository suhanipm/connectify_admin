import { Link, Outlet } from "react-router-dom";
import '../css/Nav.css';
import home from '../assets/icons/home (2).png';       // Adjust the path as necessary
import students from '../assets/icons/students.png';
import admin from '../assets/icons/admin.png';
import post from '../assets/icons/post.png';
import comments from '../assets/icons/comments.png';
import users from '../assets/icons/users.png';
import staff from '../assets/icons/staff.png';
import groups from '../assets/icons/groups.png';



function Nav(){
    return(
        <div>
          <div className="menu">
           <Link to={"/"}><button className='menu-button'><img src={home} alt="Home" /> Home</button></Link>

           <Link to={"/student-database" }><button className='menu-button'><img src={students} alt="Students" /> Students</button></Link>

           <Link to={"/admin"}><button className='menu-button'><img src={admin} alt="Admin" /> Admin</button></Link>
           
           <Link to={"/post"}><button className='menu-button'><img src={post} alt="Post" /> Post</button></Link>
           
           <Link to={"/comments"}><button className='menu-button'><img src={comments} alt="comments" /> Comments</button></Link>
           <Link to={"/users"}><button className='menu-button'><img src={users} alt="users" /> Users</button></Link>

           <Link to={"/staff"}><button className='menu-button'><img src={staff} alt="staff" /> Staff</button></Link>
           
           <Link to={"/groups"}><button className='menu-button'><img src={groups} alt="groups" /> groups</button></Link>
           
           
           
        </div>
        <Outlet></Outlet>
        </div>
    );
};
export default Nav;