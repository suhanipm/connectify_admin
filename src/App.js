import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './component/pages/Login';
import Admin from './component/pages/Admin';
import Home from './component/pages/Home';
import Nav from './component/pages/Nav';
import StudentDatabase from './component/pages/StudentDatabase';
import User from './component/pages/Users';
import Staff from './component/pages/Staff';
import EditStaff from './component/pages/Editstaff';
import Customeroutes from './component/pages/Customroutes';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Customeroutes></Customeroutes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
