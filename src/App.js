import './App.css';
import Login from './component/pages/Login';
import Admin from './component/pages/Admin';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Login></Login>
        <Admin></Admin>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
