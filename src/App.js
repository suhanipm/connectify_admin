import './App.css';
import Login from './component/pages/Login';
import Admin from './component/pages/Admin';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/pages/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Login></Login> */}
        {/* <Admin></Admin> */}
        <Nav></Nav>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
