

import StudentDatabase from './component/pages/StudentDatabase';
import Posts from './component/pages/Posts';
import Comments from './component/pages/Comments';
import AdminManagement from './component/pages/AdminManagement';
import { Link,Outlet } from 'react-router-dom';


function Nav(){
    return(
        <div>
                   <h1>Site Administration</h1>
        <div className="admin-panel">
          <div className="section">
            <h3>CORE</h3>
            <ul>
              <li>
                <Link to="/student-database">Student Database</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <Link to="/admin-management">Admin Management</Link>
              </li>
            </ul>
          </div>
        </div>
 
        </div>
    );
};
export default Nav;