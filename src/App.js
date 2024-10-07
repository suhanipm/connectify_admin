import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './component/pages/Login';
import Admin from './component/pages/Admin';
import Home from './component/pages/Home';
import Nav from './component/pages/Nav';
import StudentDatabase from './component/pages/StudentDatabase';
import User from './component/pages/Users';


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Login></Login> */}
        {/* <Admin></Admin> */}
        {/* <Home></Home> */}
        <StudentDatabase></StudentDatabase>
        {/* <User></User> */}
      </BrowserRouter>
    </div>
    
  );
}

export default App;
