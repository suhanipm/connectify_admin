import './App.css';
import Login from './component/pages/Login';
import Admin from './component/pages/Admin';
import Home from './component/pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/pages/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Login></Login> */}
        {/* <Admin></Admin> */}
        <Home></Home>
        <Nav></Nav>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
