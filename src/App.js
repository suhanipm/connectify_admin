import './App.css';
import Login from './component/pages/Login';
import Admin from './component/pages/Admin';
import Home from './component/pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/pages/Nav';
import StudentDatabase from './component/pages/StudentDatabase';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Login></Login> */}
        {/* <Admin></Admin> */}
        <Home></Home>
       <StudentDatabase></StudentDatabase>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
